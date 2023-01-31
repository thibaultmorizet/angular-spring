import { Adresse } from "./adresse";

export interface Personne {
    num?:number;
    nom?:string;
    prenom?:string;
    adresses?:Adresse[]
}
