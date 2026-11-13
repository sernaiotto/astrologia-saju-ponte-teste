// Gera weekly-briefing-test.json com dados 100% FICTÍCIOS (teste de ponte GitHub → ChatGPT).
// Sem dados pessoais, sem chamadas de rede, sem segredos.
import { writeFileSync } from 'node:fs';

const data = {
  test_id: 'astrologia-saju-ponte-01',
  generated_at: new Date().toISOString().replace(/\.\d{3}Z$/, 'Z'),
  week_start: '2026-11-16',
  status: 'test_only',
  notice: 'DADOS FICTÍCIOS — apenas teste de integração. Não interpretar como previsão real.',
  western_astrology: {
    is_test_data: true,
    transit: {
      label: 'TESTE — trânsito fictício',
      transiting_body: 'Planeta-Teste',
      aspect: 'conjunção',
      natal_point: 'Ponto-Teste',
      orb_degrees: 0.0,
    },
  },
  saju: {
    is_test_data: true,
    pillar: {
      label: 'TESTE — pilar fictício',
      type: 'dia',
      stem: 'Tronco-Teste',
      branch: 'Ramo-Teste',
    },
  },
  run: {
    github_run_id: process.env.GITHUB_RUN_ID ?? 'local',
    trigger: process.env.GITHUB_EVENT_NAME ?? 'local',
  },
};

writeFileSync('weekly-briefing-test.json', JSON.stringify(data, null, 2) + '\n');
console.log(JSON.stringify(data, null, 2));
