export const claimTypes = {
    CLAIM_UPDATE: 'CLAIM_UPDATE',
    FAILED_UPDATE: 'CLAIM_FAILED'
  }
  
  export const insertClaim = (author: number, amount: number, description: string, type: number) => async (dispatch) => {
    try {
    const resp = await fetch('http://localhost:8081/reimbursements', {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify({author, amount, description, type}),
        headers: {
          'content-type': 'application/json'
    }
    })
    if (resp.status === 401) {
        dispatch({
            type: claimTypes.FAILED_UPDATE
        })
    } else if ( resp.status === 200) {
        console.log(resp)
        console.log('Insert was successful');
    } else {
        dispatch({
            type: claimTypes.CLAIM_UPDATE
            })
    }

  } catch (err) {
      console.log('Failed' + err);
  }
  
}