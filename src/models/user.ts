import { FacebookProfile } from "./facebook.interface";

export interface User {
    email: string; 
    password: string; 
    facebookProfile?: FacebookProfile;
}