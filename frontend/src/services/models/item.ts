interface ItemListResponse {
  totalElements: number;
  content: ItemList[];
}

interface ItemList {
  id: number;
  name: string;
  description: string;
  status: string;
  dateItem: string;
  longitude: string;
  latitude: string;
  nameFound: string;
  phone: string;
  email: string;
}

interface Item {
  name: string;
  description: string;
  latitude: string;
  longitude: string;
  nameFound: string;
  phone: string;
  email: string;
}

interface Owner {
  name: string;
  cpf: string;
  birthDate: Date;
  phone: string;
  email: string;
  itemId: number;
}

interface ItemGet {
  id: number;
  name: string;
  description: string;
  status: string;
  dateItem: Date;
  longitude: string;
  latitude: string;
  nameFound: string;
  phone: string;
  email: string;
  owner: Owner;
}

export type { ItemList, Item, Owner, ItemListResponse, ItemGet };
