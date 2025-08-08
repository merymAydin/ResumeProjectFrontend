import React, { useContext } from 'react'
import { CertificateContext } from '../Contexts/CertificateContext';

const Certificates = () => {
  const { certificates } = useContext(CertificateContext);
  return (
    <>
      <section className="resume-section" id="awards">
        <div className="resume-section-content">
          <h2 className="mb-5">Awards &amp; Certifications</h2>
          <ul className="fa-ul mb-0">
            {
              certificates.map(certificate => (
                <li key={certificate.id} className="mb-3">
                  <span className="fa-li">
                    <i className="fas fa-trophy text-warning" />
                  </span>
                  <div>
                    <strong>{certificate.title}</strong> - {certificate.organization}
                  </div>
                  <div>{certificate.description}</div>
                  <div><small>{new Date(certificate.dateAt).toLocaleDateString()}</small></div>
                </li>
              ))
            }
          </ul>
        </div>
      </section>
    </>
  )
}

export default Certificates
