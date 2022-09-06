const cosasQueAprendimos = [
  {
    tema: 'terminal',
    class: '',
  },
  {
    tema: 'node',
    class: '',
  },
  {
    tema: 'oop',
    class: '',
  },
  {
    tema: 'typescript',
    class: '',
  },
  {
    tema: 'css',
    class: '',
  },
  {
    tema: 'dom',
    class: 'special',
  },
];

function main() {
  const listaEl = document.querySelector('.lista');
  const listaLiEl = document.querySelectorAll('.lista li');

  for (const iterator of listaLiEl) {
    iterator.remove();
  }

  for (const item of cosasQueAprendimos) {
    const newLiEl = document.createElement('li');
    newLiEl.textContent = item.tema;
    const iteratorCosas = item.class || 'item';
    newLiEl.classList.add(iteratorCosas);

    listaEl.appendChild(newLiEl);
  }
}

main();
