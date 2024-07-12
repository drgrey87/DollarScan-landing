function TermsOfUse() {
    return (
        <iframe src={process.env.PUBLIC_URL + '/TermsofUse.html'} style={{width: '100vw', height: '100vh'}} allow="autoplay"></iframe>
    );
}

export default TermsOfUse;