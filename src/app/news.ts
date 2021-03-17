
export class News {
  id: number;
  name: string;
  description: string;
  link: string;
  path: string;

  constructor(id: number, name: string, description: string, link: string, path: string) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.link = link;
    this.path = path;
  }
}
