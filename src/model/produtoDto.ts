export class ProdutoDto {
    
    private _IdProduto : Number;
    private _NomeProduto : String;
    private _ValorProduto : Number;
    private _IdCategoria : Number;
    private _QuantidadeEstoque : Number;
    private _Ativo : Boolean;
    private _DataValidadeProduto : String;
    private _FotoProduto : String;
    constructor(){

    }

    getDataValidadeProduto() : String{
        return this._DataValidadeProduto
    }

    getFotoProduto () : String{
        return this._FotoProduto;
    }

    isAtivo () : Boolean{
        return this._Ativo;
    }

    getIdProduto () : Number{
        return this._IdProduto;
    }

    getNomeProduto() : String{
        return this._NomeProduto;
    }

    getValorProduto() : Number{
        return this._ValorProduto;
    }

    getIdCategoria() : Number{
        return this._IdCategoria;
    }

    getQuantidadeEstoque() : Number{
        return this._QuantidadeEstoque;
    }

    setNomeProduto (nome : String) {
        this._NomeProduto = nome;
    }

    setValorProduto (valor : Number){
        this._ValorProduto = valor;
    }

    setIdCategoria (id : Number){
        this._IdCategoria = id;
    }

    setIdProduto (id : Number){
        this._IdProduto = id;
    }

    setQuantidadeEstoque (qtd : Number){
        this._QuantidadeEstoque = qtd;
    }

    setIsAtivo (ativo : Boolean){
        this._Ativo =ativo;
    }

    setDataValidadeProduto(data : String){
        this._DataValidadeProduto = data;
    }

    setFotoProduto(foto : String){
        this._FotoProduto = foto;
    }

}