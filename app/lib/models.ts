import modelsData from "../data/models.json";
import type { Model } from "../types";

// ✅ Отримати всі моделі
export async function getAllModels(): Promise<Model[]> {
  // JSON already loaded via import, so it's instant
  return modelsData as Model[];
}

// ✅ Отримати одну модель за ID
export async function getModelById(id: string | number): Promise<Model> {
  const allModels = modelsData as Model[];
  const foundModel = allModels.find((model) => model.id.toString() === id.toString());

  if (!foundModel) {
    throw new Error(`Model with id ${id} not found`);
  }

  return foundModel;
}
