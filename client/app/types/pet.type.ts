import { ProfileType } from "./profile.type";

export type PetType = {
  id?: number;
  petOwnerId?: number;
  pet_owner?: ProfileType;
  picture?: string;
  name?: string;
  gender?: string;
  age?: string;
  race?: string;
  disease?: string;
  diseaseType?: string;
  treatment?: string;
  treatmentType?: string;
  vaccines?: string;
  castrated?: string;
  petshop?: string;
  veterinary?: string;
};