var subjectObject = {
    "Front-end": {
        "HTML": ["Links", "Images", "Tables", "Lists"],
        "CSS": ["Borders", "Margins", "Backgrounds", "Float"],
        "JavaScript": ["Variables", "Operators", "Functions", "Conditions"]    
    },
    "Back-end": {
        "PHP": ["Variables", "Strings", "Arrays"],
        "SQL": ["SELECT", "UPDATE", "DELETE"]
    }
}

var subjectSelect = document.getElementById("subject");
var topicSelect = document.getElementById("topic");
var chapterSelect = document.getElementById("chapter");

subjectSelect.addEventListener("change", function() {
    topicSelect.innerHTML = "<option value='' selected='selected'>Please select subject first</option>";
    chapterSelect.innerHTML = "<option value='' selected='selected'>Please select topic first</option>";
    var selectedSubject = subjectSelect.value;
    
    if (selectedSubject !== "") {
        var topics = subjectObject[selectedSubject];
        for (var topic in topics) {
            var option = document.createElement("option");
            option.value = topic;
            option.text = topic;
            topicSelect.appendChild(option);
        }
    }
});


topicSelect.addEventListener("change", function() {
    chapterSelect.innerHTML = "<option value='' selected='selected'>Please select topic first</option>";
    var selectedTopic = topicSelect.value;
    var selectedSubject = subjectSelect.value;
    
    if (selectedTopic !== "" && selectedSubject !== "") {
        var chapters = subjectObject[selectedSubject][selectedTopic];
        for (var chapter of chapters) {
            var option = document.createElement("option");
            option.value = chapter;
            option.text = chapter;
            chapterSelect.appendChild(option);
        }
    }
});