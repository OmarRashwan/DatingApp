import {photo} from './photo'

 
export interface User {
  id: number;
  username: string;
  KnowAs: string;
  Age: number;
 Gender: string;
  Created: Date;
  LastActive: Date;
  photoUrl: string;
  City: string;
  Country: string;
  Interests?: string;
  introduction?: string;
  LookingFor?: string;
  Photos?: photo[];

}
