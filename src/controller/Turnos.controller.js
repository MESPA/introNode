//comunicarme con la base de datos

import{getConnection,sql,queries} from '../database'


export const getTurnos = async (req,res) => {
   
    const pool = await getConnection();
    
    const result = await  pool
    .request()
    .query(queries.gellturnosAll);
    //console.log(result)
    res.json(result)
};

/*export const createnewTurno = async (req, res) => {
    const { name, description } = req.body;
    let { quantity } = req.body;
    try {
  
        await pool
        .request()
        .input("name", sql.VarChar, name)
        .input("description", sql.Text, description)
        .input("quantity", sql.Int, quantity)
        .query(querys.addNewProduct);

        res.json();
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  };*/
  
  export const getTurnosById = async (req, res) => {
  

     
      const {id} = req.params;
      const pool = await getConnection();
     const result= await pool.request()
      .input("id",id)
      .query(queries.getTurnosById);
      //console.log(result)

  
      
        res.send(result.recordset[0]);
   
  }
  