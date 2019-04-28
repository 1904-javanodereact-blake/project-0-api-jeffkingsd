export const authTypes = {
    INVALID_CREDENTIALS: 'INVALID_CREDENTIALS',
    FAILED_TO_LOGIN: 'FAILED_TO_LOGIN',
    LOGGED_IN: 'LOGGED_IN'
  }
  
  export const login = (username: string, password: string, history: any) => async(dispatch) => {
    try {
      const resp = await fetch('http://localhost:8081/user/login', {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify({username, password}),
        headers: {
          'content-type': 'application/json'
        }
      })
      if (resp.status === 401) {
        dispatch({
          type: authTypes.INVALID_CREDENTIALS
        })
      } else if (resp.status === 200) {
        // redirect to spaceships page
        console.log(resp);
        console.log(username + ' ' + password);
        const user = await resp.json();  /**** this is where it bugs out ******/
        console.log('Does this get called?');
        dispatch({
          payload: {
            user
          },
          type: authTypes.LOGGED_IN
        })
        history.push('/home');
      } else {
        dispatch({
          type: authTypes.FAILED_TO_LOGIN
        })
      }
    } catch (err) {
      console.log(err);
    }
  }