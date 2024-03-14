const token = 'BQDpzyVKvAcmU6f33FgWoZ9lHveCyfrVfavX-xrGQi6iJMKSQX96CnG2_a0IkyiciCoIYUjfmPzhDrxXGaJ56bBfk4lzOidJYxGoEE0do1ylSTE6wkyWdCRZaYMMZJHj8Pap-Q8_K5hOIET9GRcGgmsD4354BWDMo-iD6oVzk5qv8xvPX_vLG4pR6PKoaZe94OdOL3YiiodmhNGj9dlChbZbP4Fh5Fw3bFjXuSgbyKRtKVq8E_THwzqPJ19bJOKqYp-T';
async function fetchWebApi(endpoint, method, body) {
  const res = await fetch(`https://api.spotify.com/${endpoint}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method,
    body: JSON.stringify(body)
  });
  return await res.json();
}

fetchWebApi('v1/me/top/artists?limit=5&time_range=short_term', 'GET').then(console.log);