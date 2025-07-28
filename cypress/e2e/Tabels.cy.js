describe('Tables', ()=>{
    it('Tables task', ()=>{

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('table>tbody>tr>td:nth-child(2)').each(($tabledata)=>{

            if($tabledata.text().includes('SQL in Practical')){
                cy.wrap($tabledata).then((getdata)=>{
                    const expeactedtext= getdata.text()
                    cy.log(expeactedtext)
                })
            }
        })
    })
})