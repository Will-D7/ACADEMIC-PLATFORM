// Esta función permite añadir campos para preguntas al formulario
function addQuestion() {
    const questionType = document.getElementById('questionType').value;
    const questionContainer = document.getElementById('questionContainer');
    
    if (questionType === 'multipleChoice') {
        addMultipleChoiceQuestion(questionContainer);
    } else if (questionType === 'shortAnswer') {
        addShortAnswerQuestion(questionContainer);
    } else if (questionType === 'longAnswer') {
        addLongAnswerQuestion(questionContainer);
    }
}

function addDeleteButtonToQuestion(container) {
    const deleteButton = document.createElement('button');
    deleteButton.type = 'button';
    deleteButton.className = 'btn btn-danger mt-2';
    deleteButton.innerText = 'Eliminar Pregunta';
    deleteButton.onclick = function() {
        container.remove();
    };
    container.appendChild(deleteButton);
}

function addMultipleChoiceQuestion(container) {
    const multipleChoiceContainer = document.createElement('div');
    multipleChoiceContainer.className = 'mb-3 multiple-choice';

    // Etiqueta y campo de entrada para la pregunta
    const questionLabel = document.createElement('label');
    questionLabel.innerText = 'Pregunta de Selección:';
    multipleChoiceContainer.appendChild(questionLabel);

    const questionInput = document.createElement('input');
    questionInput.type = 'text';
    questionInput.className = 'form-control mb-2';
    questionInput.name = 'multipleChoiceQuestions[]';
    multipleChoiceContainer.appendChild(questionInput);

    // Contenedor para las opciones
    const optionsContainer = document.createElement('div');
    optionsContainer.className = 'options-container';
    multipleChoiceContainer.appendChild(optionsContainer);

    // Añadir una opción por defecto
    addOption(optionsContainer);

    // Botones para añadir y eliminar opciones
    const addOptionButton = document.createElement('button');
    addOptionButton.type = 'button';
    addOptionButton.className = 'btn btn-secondary mt-2';
    addOptionButton.innerText = 'Añadir Opción';
    addOptionButton.onclick = function() {
        addOption(optionsContainer);
    };
    multipleChoiceContainer.appendChild(addOptionButton);

    const removeOptionButton = document.createElement('button');
    removeOptionButton.type = 'button';
    removeOptionButton.className = 'btn btn-danger mt-2 ml-2';
    removeOptionButton.innerText = 'Eliminar Última Opción';
    removeOptionButton.onclick = function() {
        if (optionsContainer.children.length > 1) {
            optionsContainer.removeChild(optionsContainer.lastChild);
        }
    };
    multipleChoiceContainer.appendChild(removeOptionButton);

    addDeleteButtonToQuestion(multipleChoiceContainer);
    container.appendChild(multipleChoiceContainer);
}

function addOption(container) {
    const optionInput = document.createElement('input');
    optionInput.type = 'text';
    optionInput.className = 'form-control mt-2';
    optionInput.placeholder = 'Opción';
    optionInput.name = 'options[]';
    container.appendChild(optionInput);
}

function addShortAnswerQuestion(container) {
    const shortAnswerContainer = document.createElement('div');
    shortAnswerContainer.className = 'mb-3 short-answer';

    const questionLabel = document.createElement('label');
    questionLabel.innerText = 'Pregunta de Respuesta Corta:';
    shortAnswerContainer.appendChild(questionLabel);

    const questionInput = document.createElement('input');
    questionInput.type = 'text';
    questionInput.className = 'form-control mb-2';
    questionInput.name = 'shortAnswerQuestions[]';
    shortAnswerContainer.appendChild(questionInput);

    const answerLabel = document.createElement('label');
    answerLabel.innerText = 'Respuesta Correcta:';
    shortAnswerContainer.appendChild(answerLabel);

    const answerInput = document.createElement('input');
    answerInput.type = 'text';
    answerInput.className = 'form-control mb-2';
    answerInput.name = 'shortAnswers[]';
    shortAnswerContainer.appendChild(answerInput);

    addDeleteButtonToQuestion(shortAnswerContainer);
    container.appendChild(shortAnswerContainer);
}

function addLongAnswerQuestion(container) {
    const longAnswerContainer = document.createElement('div');
    longAnswerContainer.className = 'mb-3 long-answer';

    const questionLabel = document.createElement('label');
    questionLabel.innerText = 'Pregunta de Respuesta Larga:';
    longAnswerContainer.appendChild(questionLabel);

    const questionInput = document.createElement('textarea');
    questionInput.rows = '3';
    questionInput.className = 'form-control mb-2';
    questionInput.name = 'longAnswerQuestions[]';
    longAnswerContainer.appendChild(questionInput);

    addDeleteButtonToQuestion(longAnswerContainer);
    container.appendChild(longAnswerContainer);
}