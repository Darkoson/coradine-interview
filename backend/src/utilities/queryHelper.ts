import { DocumentType } from "@typegoose/typegoose";
import { ModelType } from "@typegoose/typegoose/lib/types";
import mongoose from "mongoose";

export async function customFindOne<T>(
  model: ModelType<T>,
  conditions: mongoose.FilterQuery<DocumentType<T>>,
  projection: string | Record<string, unknown> = {},
  options: Record<string, unknown> = {}
): Promise<DocumentType<T>> {
  return await model.findOne(conditions, projection, options).orFail();
}
