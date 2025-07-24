import modelsData from "../data/models.json";
import type { Model } from "../types";
import { GetModelsParams } from "../types";

export async function getModels({ category }: GetModelsParams = {}): Promise<Model[]> {
  // This is where you'd write code to fetch the list
  // of models from a database. We're mocking that with
  // our JSON array of data in models.json for now.
  let filteredModels = [...modelsData]
  if (category) {
    filteredModels = modelsData.filter(
      (model: Model) => model.category === category
    )
  }
  return filteredModels
}

export async function getModelById(id: string | number): Promise<Model> {
  const stringId = id.toString()
  const foundModel = (modelsData as Model[]).find(
    (model) => model.id.toString() === stringId
  )

  if (!foundModel) {
    throw new Error(`Model with id ${id} not found`)
  }

  return foundModel
}
