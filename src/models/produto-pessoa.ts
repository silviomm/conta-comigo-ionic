import { Consumidor } from "./consumidor";
import { Produto } from "./produto";

export interface ProdutoPessoa {
    produto: Produto
    consumidores: Array<Consumidor>
}