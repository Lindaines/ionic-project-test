export class CategoriaDto {
    private _IdCategoria : number;
    private _Descricao : String;

    constructor(){

    }

    getDescricao () : String{
        return this._Descricao;
    }

    getIdProduto() : number{
        return this._IdCategoria;
    }

    setDescricao (desc : String){
        this._Descricao = desc;
    }

    setId (id : number){
        this._IdCategoria = id;
    }
}