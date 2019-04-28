export const resolveTypes = {
    RESOLVE_UPDATE: 'RESOLVE_UPDATE',
    RESOLVE_ACCEPT: 'RESOLVE_ACCEPT',
    RESOLVE_DENIED: 'RESOLVE_DENIED',
    RESOLVE_FAILED: 'RESOLVE_FAILED'
  }
  
  export const insertClaim = (resolver: number, status: number, type: number) => async (dispatch) => {
    try {
    const resp = await fetch('http://localhost:8081/reimbursements', {
        method: 'PATCH',
        credentials: 'include',
        body: JSON.stringify({resolver, status, type}),
        headers: {
          'content-type': 'application/json'
    }
    })
    if (resp.status === 401) {
        dispatch({
            type: resolveTypes.RESOLVE_FAILED
        })
    } else if ( resp.status === 200) {
        console.log(resp)
        console.log('Insert was successful');
    } else {
        dispatch({
            type: resolveTypes.RESOLVE_UPDATE
            })
    }

  } catch (err) {
      console.log('Failed' + err);
  }
  
}