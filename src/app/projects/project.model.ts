export class Project {
  public id: number;
  public name: string;
  public image: string;
  public language1: string;
  public language2: string;

  constructor(
    id: number,
    nome: string,
    imagem: string,
    linguagem1: string,
    linguagem2: string,
  ) {
    this.id = id;
    this.name = nome;
    this.image = imagem;
    this.language1 = linguagem1;
    this.language2 = linguagem2;
  }
}
