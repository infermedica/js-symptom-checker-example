/**
 * Created by Tomasz Gabrysiak @ Infermedica on 14/02/2017.
 */

function htmlEscape(str) {
  return str.replace(/&/g, '&amp;')
    .replace(/>/g, '&gt;')
    .replace(/</g, '&lt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/`/g, '&#96;');
}

export default function html(literalSections, ...substs) {
  const {raw} = literalSections;
  let result = '';
  substs.forEach((subst, i) => {
    let lit = raw[i];
    let sub = subst;

    if (Array.isArray(sub)) {
      sub = sub.join('');
    }

    if (lit.endsWith('$')) {
      sub = htmlEscape(sub);
      lit = lit.slice(0, -1);
    }

    result += lit;
    result += sub;
  });
  result += raw[raw.length - 1];
  return result;
}

export const riskHtmlMapper = (risks, riskFactors) => {
  return risks.filter((risk) => riskFactors.includes(risk.id)).map((risk) => {
    return html`
      <div class="custom-control custom-checkbox">
        <input id="${risk.id}" type="checkbox" class="input-risk custom-control-input">
        <label for="${risk.id}" class="custom-control-label custom-checkbox mb-2 mr-sm-2 mb-sm-0">
          ${risk.name}
        </label>
      </div>
    `;
  });
};
