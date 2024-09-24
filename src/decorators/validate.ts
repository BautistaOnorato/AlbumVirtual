import { Request, Response, NextFunction } from "express";
import z from "zod";

export function Validate(schema: z.Schema) {
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value
    descriptor.value = async function(req: Request, res: Response, next: NextFunction) {
      console.log("Validate");
      try {
        let result = await schema.safeParseAsync(req.body);
        if (!result.success) {
          throw result.error
        }
      } catch (error) {
        logging.error(error)
        return res.status(422).json(error)
      }
      return originalMethod.call(this, req, res, next)
    }
    return descriptor
  }
}
