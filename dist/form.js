//Personal Details
$('#firstName').on('change', function () {
  $('#personalFirstName').text('');
  $('#personalFirstName').text($('#firstName').val());
});

$('#lastName').on('change', function () {
  $('#personalSecondName').text('');
  $('#personalSecondName').text($('#lastName').val());
});

$('#JobTitle').on('change', function () {
  $('#jobTitle').text('');
  $('#jobTitle').text($('#JobTitle').val());
});

$('#phoneNumber').on('change', function () {
  $('#personalPhone').empty();
  $('#personalPhone').append(`
    <i class="fa fa-phone"></i>
    ${$('#phoneNumber').val()}
  `);
});

$('#email').on('change', function () {
  $('#personalEmail').empty();
  $('#personalEmail').append(`
    <i class="fa fa-envelope"></i>
    ${$('#email').val()}
  `);
});

$('#githubUrl').on('change', function () {
  $('#githubTemplate').empty();
  $('#githubTemplate').append(`
    <i class="fa fa-github"></i>
    <a href=${$('#githubUrl').val()}>${$('#githubUsername').val()}</a>
  `);
});

$('#facebookUrl').on('change', function () {
  $('#facebookTemplate').empty();
  $('#facebookTemplate').append(`
    <i class="fa fa-facebook"></i>
    <a href=${$('#facebookUrl').val()}>${$('#facebookUsername').val()}</a>
  `);
});

$('#twitterUrl').on('change', function () {
  $('#twitterTemplate').empty();
  $('#twitterTemplate').append(`
    <i class="fa fa-twitter"></i>
    <a href=${$('#twitterUrl').val()}>${$('#twitterUsername').val()}</a>
  `);
});

$('#linkedinUrl').on('change', function () {
  $('#linkedinTemplate').empty();
  $('#linkedinTemplate').append(`
    <i class="fa fa-linkedin-square"></i>
    <a href=${$('#linkedinUrl').val()}>${$('#linkedinUsername').val()}</a>
  `);
});

$('#profile').on('change', function () {
  $('#profileDesc').text('');
  $('#profileDesc').text($('textarea#profile').val());
});

//education
$('.add-education').on('click', function () {
  let educationID = $('.educations')
    .find('.education-item:last-child')
    .data('id');
  if (!educationID) {
    educationID = 0;
  }
  educationID++;
  $(this).closest('div').siblings('.accordion-body').append(`
    <div class="education-item mb-3" data-id=${educationID}>
      <form class=row>
        <div class="mb-1 col-12">
          <label for=education-${educationID} class=form-label>Education</label>
          <input type=text class=form-control id=education-${educationID} />
        </div>
        <div class="mb-1 col-6">
         <label for=educationUniversity-${educationID} class=form-label
           >University</label
         >
         <input
           type=text
           class=form-control
           id=educationUniversity-${educationID}
         />
        </div>
        <div class="mb-1 col-6">
          <label for=educationUniversityAddress-${educationID} class=form-label
            >Address</label
          >
          <input
            type=text
            class=form-control
            id=educationUniversityAddress-${educationID}
          />
        </div>
        <div class="mb-1 col-6">
          <label for=educationStartDate-${educationID} class=form-label
            >Start Date</label
          >
          <input
            type=date
            class=form-control
            id=educationStartDate-${educationID}
          />
        </div>
        <div class="mb-1 col-6">
          <label for=educationEndDate-${educationID} class=form-label
            >End Date</label
          >
          <input
            type=date
            class=form-control
            id=educationEndDate-${educationID}
          />
        </div>
        <div class="mb-1 col-12">
          <label for=educationDescription-${educationID} class=form-label
            >Description</label
          >
          <textarea
            class=form-control
            id=educationDescription-${educationID}
            rows="3"
          ></textarea>
        </div>
      </form>
      <button
        type=button
        class="btn btn-outline-danger remove-education"
      >
        <svg
          xmlns=http://www.w3.org/2000/svg
          width=16
          height=16
          fill=currentColor
          class="bi bi-trash-fill"
          viewBox="0 0 16 16"
        >
          <path
            d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"
          ></path>
        </svg>
        Remove
      </button>
      <button
        type=button
        class="btn btn-outline-success send-education"
      >
        <svg
          xmlns=http://www.w3.org/2000/svg
          width=16
          height=16
          fill=currentColor
          class="bi bi-check2"
          viewBox="0 0 16 16"
        >
          <path
            d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"
          ></path>
        </svg>
        Done
      </button>
    </div>
  `);
});

$('.accordion-body').on('click', '.remove-education', function () {
  const id = $(this).closest('.education-item').data('id');
  $(`.educationItem${id}`).remove();
  $(this).closest('.education-item').remove();
});

$('.accordion-body').on('click', '.send-education', function () {
  const educationID = $(this).closest('.education-item').data('id');
  const education = $(`#education-${educationID}`).val();
  const educationUniversity = $(`#educationUniversity-${educationID}`).val();
  const educationUniversityAddress = $(
    `#educationUniversityAddress-${educationID}`
  ).val();
  const educationStartDate = $(`#educationStartDate-${educationID}`).val();
  const educationEndDate = $(`#educationEndDate-${educationID}`).val();
  const educationDescription = $(`#educationDescription-${educationID}`).val();
  $('#educationTemplate').append(`
  <div class="timeline educationItem${educationID}">
    <div class="left-tl-content">
      <h5 class="tl-title" >
        ${educationUniversity}
      </h5>
      <p class="para" id="major">${education}</p>
      <p class="para" id="date">${educationStartDate} - ${educationEndDate}</p>
    </div>
    <div class="right-tl-content">
      <div class="tl-content">
        <h5 class="tl-title-2">${educationUniversityAddress}</h5>
        <p class="para">    ${educationDescription}
        </p>
      </div>
    </div>
  </div>
  `);
});

//work
$('.add-work').on('click', function () {
  let workID = $('.works').find('.work-item:last-child').data('id');
  if (!workID) {
    workID = 0;
  }
  workID++;
  $(this).closest('div').siblings('.accordion-body').append(`
    <div class="accordion-body works">
      <div class="work-item mb-3" data-id=${workID}>
        <form class=row>
          <div class="mb-1 col-12">
            <label for=workPosition-${workID} class=form-label
              >Position</label
            >
            <input type=text class=form-control id=workPosition-${workID} />
          </div>
          <div class="mb-1 col-6">
            <label for=workEmployer-${workID} class=form-label
              >Employer</label
            >
            <input type=text class=form-control id=workEmployer-${workID} />
          </div>
          <div class="mb-1 col-6">
            <label for=workAddress-${workID} class=form-label>Address</label>
            <input type=text class=form-control id=workAddress-${workID} />
          </div>
          <div class="mb-1 col-6">
            <label for=workStartDate-${workID} class=form-label
              >Start Date</label
            >
            <input
              type=date
              class=form-control
              id=workStartDate-${workID}
            />
          </div>
          <div class="mb-1 col-6">
            <label for=workEndDate-${workID} class=form-label>End Date</label>
            <input type=date class=form-control id=workEndDate-${workID} />
          </div>
          <div class="mb-1 col-12">
            <label for=workDescription-${workID} class=form-label
              >Description</label
            >
            <textarea
              class=form-control
              id=workDescription-${workID}
              rows=3
            ></textarea>
          </div>
        </form>
        <button type=button class="btn btn-outline-danger remove-work">
          <svg
            xmlns=http://www.w3.org/2000/svg
            width=16
            height=16
            fill=currentColor
            class="bi bi-trash-fill"
            viewBox="0 0 16 16"
          >
            <path
              d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"
            ></path>
          </svg>
          Remove
        </button>
        <button type=button class="btn btn-outline-success send-work">
          <svg
            xmlns=http://www.w3.org/2000/svg
            width=16
            height=16
            fill=currentColor
            class="bi bi-check2"
            viewBox="0 0 16 16"
          >
            <path
              d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"
            ></path>
          </svg>
          Done
        </button>
      </div>
    </div>
  `);
});

$('.accordion-body').on('click', '.remove-work', function () {
  const id = $(this).closest('.work-item').data('id');
  $(`.experienceItem${id}`).remove();
  $(this).closest('.work-item').remove();
});

$('.accordion-body').on('click', '.send-work', function () {
  const workID = $(this).closest('.work-item').data('id');
  const workPosition = $(`#workPosition-${workID}`).val();
  const workEmployer = $(`#workEmployer-${workID}`).val();
  const workAddress = $(`#workAddress-${workID}`).val();
  const workStartDate = $(`#workStartDate-${workID}`).val();
  const workEndDate = $(`#workEndDate-${workID}`).val();
  const workDescription = $(`#workDescription-${workID}`).val();
  $('#experienceTemplate').append(`
  <div class="timeline experienceItem${workID}">
    <div class="left-tl-content">
      <h5 class="tl-title">${workEmployer}</h5>
      <p class="para">${workStartDate} - ${workEndDate}</p>
      <p class="para">${workAddress}</p>
    </div>
    <div class="right-tl-content">
      <div class="tl-content">
        <h5 class="tl-title-2">${workPosition}</h5>
        <p class="para">
          ${workDescription}
        </p>
      </div>
    </div>
  </div>
  `);
});

//skill
$('.add-skill').on('click', function () {
  let skillID = $('.skills').find('.skill-item:last-child').data('id');
  if (!skillID) {
    skillID = 0;
  }
  skillID++;
  $(this).closest('div').siblings('.accordion-body').append(`
    <div class='skill-item mb-2' data-id=${skillID}>
        <div class="mb-1">
          <label for=skill-${skillID} class=form-label>Skill</label>
          <input type="text" class=form-control id=skill-${skillID} />
        </div>
        <div class="row">
          <div class="skill-range col-8">
            <label for=skill-range-${skillID} class=form-label>Level</label>
            <input
              type=range
              class=form-range
              min=0
              value=0
              max=5
              step=1
              id=skill-range-${skillID}
            />
          </div>
          <div class="skill-evaluation col-4 pt-4"></div>
        </div>
      <button type=button class="btn btn-outline-danger remove-skill">
        <svg
          xmlns=http://www.w3.org/2000/svg
          width=16
          height=16
          fill=currentColor
          class="bi bi-trash-fill"
          viewBox="0 0 16 16"
        >
          <path
            d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"
          ></path>
        </svg>
        Remove Skill
      </button>
      <button type="button" class="btn btn-outline-success send-skill">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-check2"
          viewBox="0 0 16 16"
          >
          <path
            d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"
          ></path>
        </svg>
        Done
      </button>
    </div>
  `);
});

$('.accordion-body').on('click', '.remove-skill', function () {
  const skillID = $(this).closest('.skill-item').data('id');
  $(`#skill${skillID}`).remove();
  $(this).closest('.skill-item').remove();
});

const getSkillEvaluation = function (skillRange) {
  let skillEvaluation = '';
  if (skillRange == 1) {
    skillEvaluation = 'Beginner';
  } else if (skillRange == 2) {
    skillEvaluation = 'Moderate';
  } else if (skillRange == 3) {
    skillEvaluation = 'Good';
  } else if (skillRange == 4) {
    skillEvaluation = 'Very good';
  } else if (skillRange == 5) {
    skillEvaluation = 'Excellent';
  }
  return skillEvaluation;
};

$('.accordion-body').on('click', '.send-skill', function () {
  const skillRange = $(this).closest('.skill-item').find('.form-range').val();
  const skillEvaluation = getSkillEvaluation(skillRange);
  const skill = $(this).closest('.skill-item').find('input[type=text]').val();
  const skillID = $(this).closest('.skill-item').data('id');
  $('#skills-list').append(`
    <li id='skill${skillID}'>
      <p class="skill-title">${skill} : ${skillEvaluation}</p>
    </li>
  `);
});

$('.skills').on('change', '.form-range', function () {
  const skillRange = $(this).val();
  let skillEvaluation = getSkillEvaluation(skillRange);
  $(this).closest('.skill-range').siblings('.skill-evaluation').empty();
  $(this).closest('.skill-range').siblings('.skill-evaluation').append(`
    <span class=text-danger>${skillEvaluation}</span>
  `);
});

//language
$('.add-language').on('click', function () {
  let languageID = $('.languages').find('.language-item:last-child').data('id');
  if (!languageID) {
    languageID = 0;
  }
  languageID++;
  $(this).closest('div').siblings('.accordion-body').append(`
    <div class='language-item mb-2' data-id=${languageID}>
      <div class="mb-1">
       <label for=language-${languageID} class=form-label>Language</label>
       <input type="text" class=form-control id=language-${languageID} />
       </div>
       <div class="row">
         <div class="language-range col-8">
           <label for=language-range-${languageID} class=form-label>Level</label>
           <input
             type=range
             class=form-range
             min=0
             max=5
             value=0
             step=1
             id=language-range-${languageID}
           />
         </div>
         <div class="language-evaluation col-4 pt-4"></div>
       </div>
      <button type=button class="btn btn-outline-danger remove-language">
        <svg
          xmlns=http://www.w3.org/2000/svg
          width=16
          height=16
          fill=currentColor
          class="bi bi-trash-fill"
          viewBox="0 0 16 16"
        >
          <path
            d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"
          ></path>
        </svg>
        Remove Language
      </button>
      <button type="button" class="btn btn-outline-success send-language">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-check2"
          viewBox="0 0 16 16"
        >
          <path
            d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"
          ></path>
        </svg>
        Done
      </button>
    </div>
  `);
});

$('.accordion-body').on('click', '.remove-language', function () {
  const languageID = $(this).closest('.language-item').data('id');
  $(`#language${languageID}`).remove();
  $(this).closest('.language-item').remove();
});

const getLanguageEvaluation = function (languageRange) {
  let languageEvaluation = '';
  if (languageRange == 1) {
    languageEvaluation = 'Beginner';
  } else if (languageRange == 2) {
    languageEvaluation = 'Moderate';
  } else if (languageRange == 3) {
    languageEvaluation = 'Good';
  } else if (languageRange == 4) {
    languageEvaluation = 'Very good';
  } else if (languageRange == 5) {
    languageEvaluation = 'Fluent';
  }
  return languageEvaluation;
};

$('.accordion-body').on('click', '.send-language', function () {
  const languageRange = $(this)
    .closest('.language-item')
    .find('.form-range')
    .val();
  const languageEvaluation = getLanguageEvaluation(languageRange);
  const language = $(this)
    .closest('.language-item')
    .find('input[type=text]')
    .val();
  const languageID = $(this).closest('.language-item').data('id');
  $('#languages-list').append(`
    <li id='language${languageID}'>
      <p class="skill-title">${language}:${languageEvaluation}</p>
    </li>
  `);
});

$('.languages').on('change', '.form-range', function () {
  const languageRange = $(this).val();
  const languageEvaluation = getLanguageEvaluation(languageRange);
  $(this).closest('.language-range').siblings('.language-evaluation').empty();
  $(this).closest('.language-range').siblings('.language-evaluation').append(`
    <span class=text-danger>${languageEvaluation}</span>
  `);
});

//hobby
$('.add-hobby').on('click', function () {
  let hobbyID = $('.hobbies').find('.hobby-item:last-child').data('id');
  if (!hobbyID) {
    hobbyID = 0;
  }
  hobbyID++;
  $(this).closest('div').siblings('.accordion-body').append(`
    <div class='hobby-item mb-2' data-id=${hobbyID}>
      <div class="mb-1">
        <label for=hobby-${hobbyID} class=form-label>Hobby</label>
        <input type="text" class=form-control id=hobby-${hobbyID} />
       </div>
      <button type=button class="btn btn-outline-danger remove-hobby">
        <svg
          xmlns=http://www.w3.org/2000/svg
          width=16
          height=16
          fill=currentColor
          class="bi bi-trash-fill"
          viewBox="0 0 16 16"
        >
          <path
            d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"
          ></path>
        </svg>
        Remove Hobby
      </button>
      <button type="button" class="btn btn-outline-success send-hobby">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-check2"
          viewBox="0 0 16 16"
        >
          <path
            d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"
          ></path>
        </svg>
          Done
      </button>
    </div>
  `);
});

$('.accordion-body').on('click', '.remove-hobby', function () {
  const hoppyID = $(this).closest('.hobby-item').data('id');
  $(`#hoppy${hoppyID}`).remove();
  $(this).closest('.hobby-item').remove();
});

$('.accordion-body').on('click', '.send-hobby', function () {
  const hoppy = $(this).closest('.hobby-item').find('input').val();
  const hoppyID = $(this).closest('.hobby-item').data('id');
  $('#hobbies-list').append(`
    <li id=hoppy${hoppyID}>
      <p class="skill-title">${hoppy}</p>
    </li>
  `);
});

//reference
$('.add-reference').on('click', function () {
  let referenceID = $('.references')
    .find('.reference-item:last-child')
    .data('id');
  if (!referenceID) {
    referenceID = 0;
  }
  referenceID++;
  $(this).closest('div').siblings('.accordion-body').append(`
    <div class='reference-item mb-2' data-id=${referenceID}>
      <div class="mb-1">
       <label for=reference-${referenceID} class=form-label>Reference</label>
       <input type="text" class=form-control id=reference-${referenceID} />
       <label for="referenceName-${referenceID}" class="form-label">Name</label>
       <input type="text" class="form-control" id="referenceName-${referenceID}" />
       </div>
      <button type=button class="btn btn-outline-danger remove-reference">
        <svg
          xmlns=http://www.w3.org/2000/svg
          width=16
          height=16
          fill=currentColor
          class="bi bi-trash-fill"
          viewBox="0 0 16 16"
        >
          <path
            d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"
          ></path>
        </svg>
        Remove Reference
      </button>
      <button type="button" class="btn btn-outline-success send-reference">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-check2"
          viewBox="0 0 16 16"
        >
          <path
            d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"
          ></path>
        </svg>
          Done
      </button>
    </div>
  `);
});

$('.accordion-body').on('click', '.remove-reference', function () {
  const referenceID = $(this).closest('.reference-item').data('id');
  $(`#reference${referenceID}`).remove();
  $(this).closest('.reference-item').remove();
});

$('.accordion-body').on('click', '.send-reference', function () {
  const reference = $(this)
    .closest('.reference-item')
    .find('input:nth-child(2)')
    .val();
  const referenceID = $(this).closest('.reference-item').data('id');
  const referenceName = $(this)
    .closest('.reference-item')
    .find('input:nth-child(4)')
    .val();
  $('#references-list').append(`
    <li id=reference${referenceID}>
      <h6 class="sub-title">${referenceName}</h6>
      <p class="sub-para">${reference}</p>
    </li>
  `);
});
