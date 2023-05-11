import React from "react";

function Footers() {
  return (
    <div>
      <footer className="footer">
        <div className="footer_row">
          <div className="copyright">Copyright &copy; Your Website 2023</div>
          <div className="footer_icon">
            <button className="footer_icon" aria-label="Twitter">
              <i class="fab fa-twitter"></i>
            </button>
            <button className="footer_icon" aria-label="Facebook">
              <i class="fab fa-facebook-f"></i>
            </button>
            <button className="footer_icon" aria-label="LinkedIn">
              <i class="fab fa-linkedin-in"></i>
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footers;
