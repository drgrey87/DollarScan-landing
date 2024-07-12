function PrivacyPolicy() {
    return (<iframe src={process.env.PUBLIC_URL + '/PrivacyPolicy.html'} style={{width: '100vw', height: '100vh'}} allow="autoplay"></iframe>);
}

export default PrivacyPolicy;