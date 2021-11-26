/**
 * Created by Tomasz Gabrysiak @ Infermedica on 03/02/2017.
 */

const template = `
  <div class="card">
      <header class="card-header">
          <i class="fa fa-user-md"></i> 
          Symptom Checker Example
          <span class="d-none d-sm-block float-right text-muted">
            powered by 
            <a href="http://infermedica.com/">
              Infermedica
            </a>
          </span>
      </header>
      <main id="step-container" class="card-block">
        <!-- dynamic content goes here -->
      </main>
      <footer class="card-footer">
          <button id="next-step" class="btn btn-primary float-right">Next <i class="fa fa-chevron-right"></i></button>
      </footer>
  </div>
`;

export default template;
