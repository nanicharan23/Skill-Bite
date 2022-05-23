import React from 'react'

function Footer() {
  const LINKEDIN_URL = "https://www.linkedin.com/in/thiruvalluru-sri-charan-75a7241a9/";
  return (
    <div>
        <footer class="page-footer font-small bg-dark p">
            <div class="footer-copyright text-center py-3 text-white">Developed by Ex-Amazonian :
            <a href={LINKEDIN_URL}  target="_blank"> Thiruvalluru Sri Charan</a>
            </div>
        </footer>
    </div>
  )
}

export default Footer