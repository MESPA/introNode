import sql from 'mssql'

const bdsetting= {
    user :'sa',
    password:'Adr180574',
    server:'192.168.0.177',
    database:'ADRCRM',
    options: {
        encrypt: true, // for azure
        trustServerCertificate: true // change to true for local dev / self-signed certs
      }

}

export async function getConnection(){

    try {
        const pool = await sql.connect(bdsetting)
        return pool;
    } catch (error) {
        console.error(error);
    }
 
}
