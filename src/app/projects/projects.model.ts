export class Project {
  public id: number;
  public name: string;
  public image: string;
  public language: string;
  public path: string;

  constructor(id: number, nome: string,imagem: string, linguagem: string, caminho: string) {
    this.id = id;
    this.name = nome;
    this.image = imagem;
    this.language = linguagem;
    this.path = caminho;
  }
}
