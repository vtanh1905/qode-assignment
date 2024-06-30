const getData = (endPoint: string) => fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}${endPoint}`).then((res) => res.json().then(response => response.data));

const postData = async (endPoint: string, { arg }: { arg: any }) => {
    return fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}${endPoint}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(arg)
    }).then(res => res.json());
}

const uploadFile = async (endPoint: string, file: any) => {
    const formData = new FormData();
    formData.append('file', file);

   return fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}${endPoint}`, {
        method: 'POST',
        body: formData,
    }).then(res => res.json());
}

export { getData, postData, uploadFile };