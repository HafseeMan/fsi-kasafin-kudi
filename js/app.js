const { nibss } = require('innovation-sandbox');

/*CODE TO GET CREDENTIALS....  
                password: "...",
                ivkey: '',
                aes_key: '',
                host: ''

                |  
                |
                V
*/
const getBVN = (req, res, next) => {
    Request.post(
    'https://sandboxapi.fsi.ng/nibss/Reset',
    (err, result) => {
        if(err){
            throw err
        }
    nibss.Bvnr.Reset({
        sandbox_key: "665b40b6600a3c55e9b4007ccec5079c",
        organisation_code: "MTExMTE=" 

    }).then(response => {
        res.status(200).json({
            response,
            message: "Data recieved"
        })
    }).catch(err => {
        res.json(err)
    })
    })
}
    
/*CODE TO USE (VALIDATE RECORDS)....  

                |  
                |
                V
*/


const verifyRecords = (req, res, next) => {
    Request.post(
        'https://sandboxapi.fsi.ng/nibss/VeryifySingleBVN',
        (err, result) => {
            if(err){
                throw err
            }
            nibss.PlaceHolder.ValidateRecords({
                Record: {
                  BVN: 'BVN || 12345678901',
                  FirstName: 'Owner First Name || Uchenna',
                  LastName: 'Owner Last name || Okoro',
                  MiddleName: 'Owner Middle Name || Adepoju',
                  AccountNumber: 'Owner Account Number || 0987654321',
                  BankCode: 'Bank Code || 011'
                },
                sandbox_key: '665b40b6600a3c55e9b4007ccec5079c',
                organisation_code: '11111',
                password: "^o'e6EXK5T ~^j2=",
                ivkey: 'eRpKTBjd0q6T67D0',
                aes_key: '9+CZaWqfyI/fwezX',
                host: 'https://sandboxapi.fsi.ng'

            }).then(res => {

                print(res)
            })
            }).catch(err => {
                res.json(err)
            })
}

