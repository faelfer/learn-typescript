type ID = string;
type PopularTag = string;

interface UserInterface {
  id: ID;
  name: string;
  surname: string;
}

const popularTags: PopularTag[] = ["dragon", "coffe"];

let username: string = "alex";

let pageName: string | number = "1";

let errorMessage: string | null = null;

let user: UserInterface | null = null;