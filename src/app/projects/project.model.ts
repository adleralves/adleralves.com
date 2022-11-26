export class Project {
  public id: number;
  public name: string;
  public image: string;
  public language1: string;
  public language2: string;
  public path: string;

  constructor(
    id: number,
    nome: string,
    imagem: string,
    linguagem1: string,
    linguagem2: string,
    caminho: string
  ) {
    this.id = id;
    this.name = nome;
    this.image = imagem;
    this.language1 = linguagem1;
    this.language2 = linguagem2;
    this.path = caminho;
  }
}
