
export default class Matrix {

    columns;
    rows;
    data ;

    constructor(coord){
                this.data = coord.map(el => [...el]);
                this.columns = this.data[0].length;
                this.rows  =  this.data.length;
    }    

    size(){
        return {
            rows : this.rows ,
            colums : this.columns
        }
    }
  
    add(mat){
        
        const datab = this.data;
      //  this.equal_matrix_size(mat);

        for(let x = 0 ; x < this.rows ; x++){
             for(let y = 0 ; y < this.columns ; y++)
                    datab[x][y]  +=  mat.data[x][y];
        }
              return new Matrix(datab);
    }
      sub(mat){
        
        const datab = this.data;
      //  this.equal_matrix_size(mat);

        for(let x = 0 ; x < this.rows ; x++){
             for(let y = 0 ; y < this.columns ; y++)
                    datab[x][y]  -=  mat.data[x][y];
        }
        return new Matrix(datab);
    }

 
    transpose(){

        let transpose_arr = Array.from(({length : this.columns}) , ()=>
        new Array(this.rows).fill(0));
        
        for(let x = 0 ; x < this.rows ; x++) {
                for(let y = 0 ; y < this.columns ;y++ )
                        transpose_arr[y][x] = this.data[x][y];
        }
        return new Matrix(transpose_arr);
    }

}