
export default class Matrix {
        columns;
        rows;
        data ;
        constructor(coord){
          this.data = coord.map(el => [...el]);
          this.columns = this.data[0].length;
          this.rows  =  this.data.length;
        }    

 
    printm(){
        return this.data;
    }
    add(mat){
        
        const datab = this.data.map((row) => [...row]);
      //  this.equal_matrix_size(mat);

        for(let x = 0 ; x < this.rows ; x++){
             for(let y = 0 ; y < this.columns ; y++)
                    datab[x][y]  +=  mat.data[x][y];
        }
        return new Matrix(datab).printm();
    }
      sub(mat){
        
        const datab = this.data.map((row) => [...row]);
      //  this.equal_matrix_size(mat);

        for(let x = 0 ; x < this.rows ; x++){
             for(let y = 0 ; y < this.columns ; y++)
                    datab[x][y]  -=  mat.data[x][y];
        }
        return new Matrix(datab).printm();
    }

 

}