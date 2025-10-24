$(document).ready(function() {
    gameStatusPP = false;
    infoPopUp = false;
    interactivityInfoPopUp = false;
    playerName = "";
    playerNameResponse = "";
    playerEMail = "";
    playerEMailConfirm = "";
    preGameTR = "";
    postGameTR = "";
    avatarId = 100;
    prevAvatarId = 100;
    roleId = 100;
    prevRoleId = 100;

    prePost = 0;
    gender = 0;
    genderButtonClickedCount = 0;
    studyPreprogram = 0;
    studyPreprogramButtonClickedCount = 0;
    prevPreGamingExperience = 0;
    prevPreGamingExperienceButtonClickedCount = 0;
    prevXSSKnowledge = 0;
    prevXSSKnowledgeButtonClickedCount = 0;
    preXSSQuestion1 = 0;
    preXSSQuestion1ButtonsClickedCount = 0;
    preXSSQuestion2 = 0;
    preXSSQuestion2ButtonsClickedCount = 0;
    preXSSQuestion3 = 0;
    preXSSQuestion3ButtonsClickedCount = 0;
    preXSSQuestion4 = 0;
    preXSSQuestion4ButtonsClickedCount = 0;
    preXSSQuestion5 = 0;
    preXSSQuestion5ButtonsClickedCount = 0;
    xssPreMotivLikert1 = 0;
    xssPreMotivLikert1ButtonsClickedCount = 0;
    xssPreTXGExpectationsLikert1 = 0;
    xssPreTXGExpectationsLikert1ButtonsClickedCount = 0;
    xssPreGBLLikert1 = 0;
    xssPreGBLLikert1ButtonsClickedCount = 0;
    preGameStatus = false;
    postGameStatus = false;

    postXSSQuestion1ButtonClickedCount = 0;
    postXSSQuestion1 = 0;
    postXSSQuestion2ButtonClickedCount = 0;
    postXSSQuestion2 = 0;
    postXSSQuestion3ButtonClickedCount = 0;
    postXSSQuestion3 = 0;
    postXSSQuestion4ButtonClickedCount = 0;
    postXSSQuestion4 = 0;
    postXSSQuestion5ButtonClickedCount = 0;
    postXSSQuestion5 = 0;



    xssPostKnowledgeLikert1ButtonClickedCount = 0;
    xssPostKnowledgeLikert1 = 0;
    xssPostKnowledgeLikert2ButtonClickedCount = 0;
    xssPostKnowledgeLikert2 = 0;
    xssPostKnowledgeLikert3ButtonClickedCount = 0;
    xssPostKnowledgeLikert3 = 0;


    xssEngMotivationLikert1ButtonClickedCount = 0;
    xssEngMotivationLikert1 = 0;
    xssEngMotivationLikert2ButtonClickedCount = 0;
    xssEngMotivationLikert2 = 0;
    xssEngMotivationLikert3ButtonClickedCount = 0;
    xssEngMotivationLikert3 = 0;
    xssEngMotivationLikert4ButtonClickedCount = 0;
    xssEngMotivationLikert4 = 0;



    xssCogLoadLikert1ButtonClickedCount = 0;
    xssCogLoadLikert1 = 0;
    xssCogLoadLikert2ButtonClickedCount = 0;
    xssCogLoadLikert2 = 0;
    xssCogLoadLikert3ButtonClickedCount = 0;
    xssCogLoadLikert3 = 0;
    xssCogLoadLikert4ButtonClickedCount = 0;
    xssCogLoadLikert4 = 0;

    xssUIUXLikert1ButtonClickedCount = 0;
    xssUIUXLikert1 = 0;
    xssUIUXLikert2ButtonClickedCount = 0;
    xssUIUXLikert2 = 0;
    xssUIUXLikert3ButtonClickedCount = 0;
    xssUIUXLikert3 = 0;
    xssUIUXLikert4ButtonClickedCount = 0;
    xssUIUXLikert4 = 0;
    xssUIUXLikert5ButtonClickedCount = 0;
    xssUIUXLikert5 = 0;
    xssUIUXLikert6ButtonClickedCount = 0;
    xssUIUXLikert6 = 0;
    xssUIUXLikert7ButtonClickedCount = 0;
    xssUIUXLikert7 = 0;

    xssPTRAppLikert1ButtonClickedCount = 0;
    xssPTRAppLikert1 = 0;
    xssPTRAppLikert2ButtonClickedCount = 0;
    xssPTRAppLikert2 = 0;
    xssPTRAppLikert3ButtonClickedCount = 0;
    xssPTRAppLikert3 = 0;
    xssPTRAppLikert4ButtonClickedCount = 0;
    xssPTRAppLikert4 = 0;
    xssPTRAppLikert5ButtonClickedCount = 0;
    xssPTRAppLikert5 = 0;


    timeLimitInMinutes = 0;
    timeLimitInSeconds = timeLimitInMinutes * 60;
    questionTile1Selected = false;
    questionTile2Selected = false;
    questionTile3Selected = false;
    questionTile4Selected = false;
    currentLevelNo = 1;
    initialLevelDraw = true;
    playerScoreInGame = 0;
    playerScoreInLevel = 0;
    playerScoreInQuestion = 0;
    rolesPlayed = [];
    LastPlayedRole = "";
    questionTileTextLength = 115;
    timerInterval = null;
    timerSimulatorZoneInterval = null;
    insideSimulatorAction1 = false;
    insideSimulatorAction2 = false;
    initialTimerStarted = false;
    initialSimulatorZoneTimerStarted = false;
    serverToken = "";
    awardedBadgeId = 100;
    completionTime = 0;
    playerRolesPlayed = "";
    leaderboardResponse = [];
    simulatorZoneTimeLimitInSeconds = 0;
    simulatorZoneInsideTime = "";
    simulatorZoneAnswersArray = [];
    simulatorZoneAnswersString = "";
    playerQuestionAnswersString = "";
    availableTimeLimit = 0;
    gameStatus = "";
    gameStatusTest = "";
    gameNotPlayed = false;
    tileLocations = [];
    dataCapturedConfirmation = "";
    playMusic = false;
    levelsCompleted = [];
    levelMultiplier = 5;

    preGameQuestionnaireAnswersRecorded = false;
    postGameQuestionnaireAnswersRecorded = false;
    playerEmailAvatarRecorded = false;
    playerEmailCodeRecorded = false;
    prePostGameQuestionnaireCompleted = false;

    XSSCheck = "";
    AttackerReflectedSkillsValue = 0;
    AttackerStoredSkillsValue = 0;
    AttackerDOMBasedSkillsValue = 0;
    AttackerSimZoneSkillsValue = 0;

    DefenderReflectedSkillsValue = 0;
    DefenderStoredSkillsValue = 0;
    DefenderDOMBasedSkillsValue = 0;
    DefenderSimZoneSkillsValue = 0;

    UserReflectedSkillsValue = 0;
    UserStoredSkillsValue = 0;
    UserDOMBasedSkillsValue = 0;
    UserSimZoneSkillsValue = 0;

    OverallReflectedSkillsValue = 0;
    OverallStoredSkillsValue = 0;
    OverallDOMBasedSkillsValue = 0;
    OverallSimZoneSkillsValue = 0;

    SimZoneSkills1AddedtoBar = false;
    SimZoneSkills2AddedtoBar = false;
    SimZoneStoredXSSSubmitButtonClickedCounter = 0;
    XSSAlertScriptSubmitted = false;

    affirmativeAttackerFeedbackList = ["Change this to congratulatory feedback when player has completed Role 1.", "Change this to congratulatory feedback when player has completed Role 1.", "Change this to congratulatory feedback when player has completed Role 1.", "Change this to congratulatory feedback when player has completed Role 1.", "Change this to congratulatory feedback when player has completed Role 1."];
    affirmativeAttackerProgressFeedbackList = ["Change this to motivating feedback when player is playing Role 1.", "Change this to motivating feedback when player is playing Role 1.", "Change this to motivating feedback when player is playing Role 1.", "Change this to motivating feedback when player is playing Role 1.", "Change this to motivating feedback when player is playing Role 1."];

    affirmativeDefenderFeedbackList = ["Change this to congratulatory feedback when player has completed Role 2.", "Change this to congratulatory feedback when player has completed Role 2.", "Change this to congratulatory feedback when player has completed Role 2.", "Change this to congratulatory feedback when player has completed Role 2."];
    affirmativeDefenderProgressFeedbackList = ["Change this to motivating feedback when player is playing Role 2.", "Change this to motivating feedback when player is playing Role 2.", "Change this to motivating feedback when player is playing Role 2.", "Change this to motivating feedback when player is playing Role 2.", "Change this to motivating feedback when player is playing Role 2."];

   affirmativeUserFeedbackList = ["Change this to congratulatory feedback when player has completed Role 3.", "Change this to congratulatory feedback when player has completed Role 3.", "Change this to congratulatory feedback when player has completed Role 3.", "Change this to congratulatory feedback when player has completed Role 3.", "Change this to congratulatory feedback when player has completed Role 3."];
  affirmativeUserProgressFeedbackList = ["Change this to motivating feedback when player is playing Role 3.", "Change this to motivating feedback when player is playing Role 3.", "Change this to motivating feedback when player is playing Role 3.", "Change this to motivating feedback when player is playing Role 3.", "Change this to motivating feedback when player is playing Role 3."];

    affirmativeOverallFeedbackList = [
        "Well done! You’ve successfully completed The XSS Game—an excellent achievement!",
        "Congratulations on finishing The XSS Game! Your effort and dedication really paid off.",
        "Great job! You’ve completed The XSS Game and demonstrated strong persistence throughout.",
        "Success! You’ve wrapped up The XSS Game—an impressive milestone in your learning journey.",
        "The XSS Game is complete—congrats! Your achievement shows commitment and growth."
    ];

    affirmativeOverallFeedbackList = [
        "Change this to congratulatory feedback when player has completed all 3 roles.",
        "Change this to congratulatory feedback when player has completed all 3 roles.",
        "Change this to congratulatory feedback when player has completed all 3 roles.",
        "Change this to congratulatory feedback when player has completed all 3 roles.",
        "Change this to congratulatory feedback when player has completed all 3 roles."
    ];

    affirmativeOverallProgressFeedbackList = [
        "Change this to motivating overall feedback when player is playing the game.",
        "Change this to motivating overall feedback when player is playing the game.",
        "Change this to motivating overall feedback when player is playing the game.",
        "Change this to motivating overall feedback when player is playing the game.",
        "Change this to motivating overall feedback when player is playing the game."
    ];

    affirmativeRoleProgressFeedbackList = [
        "Change this to level overall feedback when player is playing the game.",
        "Change this to level overall feedback when player is playing the game.",
        "Change this to level overall feedback when player is playing the game.",
        "Change this to level overall feedback when player is playing the game.",
        "Change this to level overall feedback when player is playing the game."
    ];

    levelAttackerProgressFeedbackList = ["Change this to feedback to let the player know that insights are being generated for Role 1 and will be displayed when they finish Role." , "Change this to feedback to let the player know that insights are being generated for Role 1 and will be displayed when they finish Role.", "Change this to feedback to let the player know that insights are being generated for Role 1 and will be displayed when they finish Role.", "Change this to feedback to let the player know that insights are being generated for Role 1 and will be displayed when they finish Role.", "Change this to feedback to let the player know that insights are being generated for Role 1 and will be displayed when they finish Role."];
    levelDefenderProgressFeedbackList = ["Change this to feedback to let the player know that insights are being generated for Role 2 and will be displayed when they finish Role.", "Change this to feedback to let the player know that insights are being generated for Role 2 and will be displayed when they finish Role.", "Change this to feedback to let the player know that insights are being generated for Role 2 and will be displayed when they finish Role.", "Change this to feedback to let the player know that insights are being generated for Role 2 and will be displayed when they finish Role.", "Change this to feedback to let the player know that insights are being generated for Role 2 and will be displayed when they finish Role."];
    levelUserProgressFeedbackList = ["Change this to feedback to let the player know that insights are being generated for Role 3 and will be displayed when they finish Role.", "Change this to feedback to let the player know that insights are being generated for Role 3 and will be displayed when they finish Role.", "Change this to feedback to let the player know that insights are being generated for Role 3 and will be displayed when they finish Role.", "Change this to feedback to let the player know that insights are being generated for Role 3 and will be displayed when they finish Role.", "Change this to feedback to let the player know that insights are being generated for Role 3 and will be displayed when they finish Role."];

    incorrectAttackerAnswersList = [];
    incorrectDefenderAnswersList = [];
    incorrectUserAnswersList = [];
    correctAttackerAnswersList = [];
    correctDefenderAnswersList = [];
    correctUserAnswersList = [];

    suggestedRoleList = [];
    suggestedAttackerLevels = "";
    suggestedAttackerSteps = "";

    suggestedDefenderLevels = "";
    suggestedDefenderSteps = "";


    suggestedUserLevels = "";
    suggestedUserSteps = "";

    tabSelectedOverall = "";
    tabSelectedAttacker = "";
    tabSelectedDefender = "";
    tabSelectedUser = "";

    tabSelectedAffirmativeOverall = "";
    tabSelectedAffirmativeAttacker = "";
    tabSelectedAffirmativeDefender = "";
    tabSelectedAffirmativeUser = "";

    levelAttackerRefStoredDomXSSList = ["\n • Change this to Role 1 Skills feedback, which will be randomly selected from the array.",
        "\n • Change this to Role 1 Skills feedback, which will be randomly selected from the array.",
        "\n • Change this to Role 1 Skills feedback, which will be randomly selected from the array.",
        "\n • Change this to Role 1 Skills feedback, which will be randomly selected from the array.",
        "\n • Change this to Role 1 Skills feedback, which will be randomly selected from the array.",
        "\n • Change this to Role 1 Skills feedback, which will be randomly selected from the array."
    ];

    levelAttackerRefStoredDomXSSListAdded = false;


    levelDefenderRefStoredDomXSSList = ["\n • Change this to Role 2 Skills feedback, which will be randomly selected from the array.",
        "\n • Change this to Role 2 Skills feedback, which will be randomly selected from the array.",
        "\n • Change this to Role 2 Skills feedback, which will be randomly selected from the array.",
        "\n • Change this to Role 2 Skills feedback, which will be randomly selected from the array.",
        "\n • Change this to Role 2 Skills feedback, which will be randomly selected from the array.",
        "\n • Change this to Role 2 Skills feedback, which will be randomly selected from the array."
    ];

    levelDefenderRefStoredDomXSSListAdded = false;

    levelUserRefStoredDomXSSList = ["\n • Change this to Role 3 Skills feedback, which will be randomly selected from the array.",
        "\n • Change this to Role 3 Skills feedback, which will be randomly selected from the array.",
        "\n • Change this to Role 3 Skills feedback, which will be randomly selected from the array.",
        "\n • Change this to Role 3 Skills feedback, which will be randomly selected from the array.",
        "\n • Change this to Role 3 Skills feedback, which will be randomly selected from the array.",
        "\n • Change this to Role 3 Skills feedback, which will be randomly selected from the array."
    ];

    levelUserRefStoredDomXSSListAdded = false;


    levelUserProtectXSSList = ["\n • Change this to more Role 3 Skills feedback, which will be randomly selected from the array.",
        "\n • Change this to more Role 3 Skills feedback, which will be randomly selected from the array.",
        "\n • Change this to more Role 3 Skills feedback, which will be randomly selected from the array.",
        "\n • Change this to more Role 3 Skills feedback, which will be randomly selected from the array.",
        "\n • Change this to more Role 3 Skills feedback, which will be randomly selected from the array.",
        "\n • Change this to more Role 3 Skills feedback, which will be randomly selected from the array."
    ];

    levelUserProtectXSSListAdded = false;

    levelDefenderInputEscapeXSSList = ["\n • Change this to more Role 2 Skills feedback, which will be randomly selected from the array.",
        "\n • Change this to more Role 2 Skills feedback, which will be randomly selected from the array.",
        "\n • Change this to more Role 2 Skills feedback, which will be randomly selected from the array.",
        "\n • Change this to more Role 2 Skills feedback, which will be randomly selected from the array.",
        "\n • Change this to more Role 2 Skills feedback, which will be randomly selected from the array.",
        "\n • Change this to more Role 2 Skills feedback, which will be randomly selected from the array."
    ];

    levelDefenderInputEscapeXSSListAdded = false;

    levelDefenderProtectXSSList = ["\n • Change this to more Role 2 Skills feedback, which will be randomly selected from the array.",
        "\n • Change this to more Role 2 Skills feedback, which will be randomly selected from the array.",
        "\n • Change this to more Role 2 Skills feedback, which will be randomly selected from the array.",
        "\n • Change this to more Role 2 Skills feedback, which will be randomly selected from the array.",
        "\n • Change this to more Role 2 Skills feedback, which will be randomly selected from the array.",
        "\n • Change this to more Role 2 Skills feedback, which will be randomly selected from the array."
    ];

    levelDefenderProtectXSSListAdded = false;

    levelDefenderDOMResourcesList = ["\n • Change this to more Role 2 Skills feedback, which will be randomly selected from the array.",
        "\n • Change this to more Role 2 Skills feedback, which will be randomly selected from the array.",
        "\n • Change this to more Role 2 Skills feedback, which will be randomly selected from the array.",
        "\n • Change this to more Role 2 Skills feedback, which will be randomly selected from the array.",
        "\n • Change this to more Role 2 Skills feedback, which will be randomly selected from the array.",
        "\n • Change this to more Role 2 Skills feedback, which will be randomly selected from the array."
    ];

    levelDefenderDOMResourcesListAdded = false;

    levelAttackerXSSEffectsList = ["\n • Change this to more 1 Skills feedback, which will be randomly selected from the array.",
        "\n • Change this to Role 1 Skills feedback, which will be randomly selected from the array.",
        "\n • Change this to Role 1 Skills feedback, which will be randomly selected from the array.",
        "\n • Change this to Role 1 Skills feedback, which will be randomly selected from the array.",
        "\n • Change this to Role 1 Skills feedback, which will be randomly selected from the array.",
        "\n • Change this to Role 1 Skills feedback, which will be randomly selected from the array."
    ];

    levelAttackerXSSEffectsListAdded = false;

    levelAttackerDOMResourcesList = ["\n • Change this to more Role 1 Skills feedback, which will be randomly selected from the array.",
        "\n • Change this to more Role 1 Skills feedback, which will be randomly selected from the array.",
        "\n • Change this to more Role 1 Skills feedback, which will be randomly selected from the array.",
        "\n • Change this to more Role 1 Skills feedback, which will be randomly selected from the array.",
        "\n • Change this to more Role 1 Skills feedback, which will be randomly selected from the array.",
        "\n • Change this to more Role 1 Skills feedback, which will be randomly selected from the array."
    ];

    levelAttackerDOMResourcesListAdded = false;

    levelAttackerFlawlessCompletionList = ["\n Change this to a congratulatory message when player has completed Role 1 without any incorrect answers.",
        "\n Change this to a congratulatory message when player has completed Role 1 without any incorrect answers.",
        "\n Change this to a congratulatory message when player has completed Role 1 without any incorrect answers.",
        "\n Change this to a congratulatory message when player has completed Role 1 without any incorrect answers.",
        "\n Change this to a congratulatory message when player has completed Role 1 without any incorrect answers."
    ];


    levelDefenderFlawlessCompletionList = ["\n Change this to a congratulatory message when player has completed Role 2 without any incorrect answers.",
        "\n Change this to a congratulatory message when player has completed Role 2 without any incorrect answers.",
        "\n Change this to a congratulatory message when player has completed Role 2 without any incorrect answers.",
        "\n Change this to a congratulatory message when player has completed Role 2 without any incorrect answers.",
        "\n Change this to a congratulatory message when player has completed Role 2 without any incorrect answers."
    ];

    levelUserFlawlessCompletionList = ["\n Change this to a congratulatory message when player has completed Role 3 without any incorrect answers.",
        "\n Change this to a congratulatory message when player has completed Role 3 without any incorrect answers.",
        "\n Change this to a congratulatory message when player has completed Role 3 without any incorrect answers.",
        "\n Change this to a congratulatory message when player has completed Role 3 without any incorrect answers.",
        "\n Change this to a congratulatory message when player has completed Role 3 without any incorrect answers.",
        "\n Change this to a congratulatory message when player has completed Role 3 without any incorrect answers."
    ];

    attackerRefOffset = 9.09;
    attackerStoredOffset = 14.2;
    attackerDOMOffset = 12.5;

    defenderRefOffset = 16.6;
    defenderStoredOffset = 16.6;
    defenderDOMOffset = 10;

    userRefOffset = 12.5;
    userStoredOffset = 12.5;
    userDOMOffset = 12.5;

    overallRefOffset = 4;
    overallStoredOffset = 4.75;
    overallDOMOffset = 3.81;

    attackerSimZoneOffset = 7.69;
    defenderSimZoneOffset = 12.5;
    userSimZoneOffset = 25;
    overallSimZoneOffset = 4;

    function main() {

        gameStatus = "GameSessionStarted!";
        $('div#mainUI').show();
        setTimeout(showGDPRPopUp, 3000);

    }
    main();
});

function showGDPRPopUp() {
    if (infoPopUp == false && gameStatusPP == false) {
        $('div#gdprPopup1').show();
    }
}

function closeGDPRInfo() {
    gameStatusPP = true;
    $('div#gdprPopup1').hide();

}

function showNoServerConnectivityInfoPopUp() {
    playButtonErrorMusic();
    $('div#noServerConnectivityInfoPopUp1').show();
}

function closeNoServerConnectivityInfoPopUp() {
    $('div#noServerConnectivityInfoPopUp1').hide();
}

function playButtonHoverMusic() {

    if (playMusic == true) {
        document.getElementById('buttonHoverSound').play();
    }
}

function playButtonSelectMusic() {

    if (playMusic == true) {
        document.getElementById('buttonSelectSound').play();
    }
}

function playButtonErrorMusic() {

    if (playMusic == true) {
        document.getElementById('buttonErrorSound').play();
    }
}

function stopStartMenuMusic() {
    playMusic = false;
    document.getElementById('startMenuMusic').pause();
    const mute_music_btns = document.getElementsByClassName('mutemusicbtn');
    const play_music_btns = document.getElementsByClassName('playmusicbtn');

    for (let i = 0; i < mute_music_btns.length; i++) {
        mute_music_btns[i].style.visibility = "visible";
        play_music_btns[i].style.visibility = "hidden";
    }
}

function playStartMenuMusic() {
    playMusic = true;
    document.getElementById('startMenuMusic').play();
    const mute_music_btns = document.getElementsByClassName('mutemusicbtn');
    const play_music_btns = document.getElementsByClassName('playmusicbtn');

    for (let i = 0; i < mute_music_btns.length; i++) {
        mute_music_btns[i].style.visibility = "hidden";
        play_music_btns[i].style.visibility = "visible";
    }
}

function displayInfo() {
    $('div#infoPopUp1').show();
    infoPopUp = true;
}

function closeDisplayInfo() {
    if (playMusic == true) {
        document.getElementById('buttonSelectSound').play();
    }
    $('div#infoPopUp1').hide();
    infoPopUp = false;
}




function closePlayerNameErrorInfo() {
    if (playMusic == true) {
        document.getElementById('buttonSelectSound').play();
    }
    $('div#emptyPlayerNameErrorPopUp1').hide();
}



function closePlayerRoleErrorInfo() {
    if (playMusic == true) {
        document.getElementById('buttonSelectSound').play();
    }
    $('div#emptyPlayerRoleErrorPopUp1').hide();
}



function closeInvalidPlayerNameErrorInfo() {
    if (playMusic == true) {
        document.getElementById('buttonSelectSound').play();
    }
    $('div#playerNameErrorPopUp1').hide();
}

function closeinteractivityInfoPopUp() {
    if (playMusic == true) {
        document.getElementById('buttonSelectSound').play();
    }
    $('div#interactivityInfoPopUp1').hide();
    interactivityInfoPopUp == true;
}

function showinteractivityInfoPopUp() {
    if (interactivityInfoPopUp == false) {
        if (playMusic == true) {
            document.getElementById('buttonSelectSound').play();
        }
        $('div#interactivityInfoPopUp1').show();
    }
}


function startLevelTimer() {

    timerInterval = setInterval(startTimer, 1000);

}

function showSelectPlayerNameUI() {

    if (playMusic == true) {
        document.getElementById('buttonSelectSound').play();
    }
    if (gameStatusPP == true) {
        $('div#mainUI').hide();
        $('div#pageFooter').hide();
        $('div#selectPlayerNameUI').show();
        $('div#selectPlayerRoleUI').hide();
        $('div#levelUI').hide();
        $('div#preGameQuestionnaireUI').hide();
        $('div#postGameQuestionnaireUI').hide();
        $('div#leaderboardUI').hide();
        $('div#exitGameUI').hide();
    } else if (gameStatusPP == false) {
        $('div#gdprPopup1').show();
    }


}


function showLeaderBoard() {

    if (playMusic == true) {
        document.getElementById('buttonSelectSound').play();
    }
    $('div#mainUI').hide();
    $('div#pageFooter').hide();
    $('div#selectPlayerNameUI').hide();
    $('div#selectPlayerRoleUI').hide();
    $('div#levelUI').hide();
    $('div#preGameQuestionnaireUI').hide();
    $('div#postGameQuestionnaireUI').hide();
    $('div#leaderboardUI').show();
    $('div#exitGameUI').hide();


    const players = getAllPlayersData();

    let table = '<table>';
    table += '<tr><th style="color: rgb(255, 255, 255);font-weight: bold;text-align: center;">Playername</th><th style="color: rgb(255, 255, 255);font-weight: bold;text-align: center;">Player Avatar</th><th style="color: rgb(255, 255, 255);font-weight: bold;text-align: center;">Points</th><th style="color: rgb(255, 255, 255);font-weight: bold;text-align: center;">Badges</th></tr>';

    players.forEach(player => {
        let avatarImage = `<img class="avatar-image-cell" src="images/avatars/avatar${player.avatarId}.png">`;

        let badgeImages = "";
        const roles = player.playerRolesPlayed || [];
        if (roles.includes("Attacker")) badgeImages += '<img class="badge-attacker-cell" src="images/badges/Role1-Completed.png">';
        if (roles.includes("Defender")) badgeImages += '<img class="badge-defender-cell" src="images/badges/Role2-Completed.png">';
        if (roles.includes("User")) badgeImages += '<img class="badge-user-cell" src="images/badges/Role3-Completed.png">';
        if (roles.includes("SimZone")) badgeImages += '<img class="badge-SimZone-cell" src="images/badges/Sim-Zone.png">';

        table += `<tr><td>${player.playerName}</td><td>${avatarImage}</td><td>${player.playerScore}</td><td>${badgeImages}</td></tr>`;
    });

    table += '</table>';
    document.getElementById('table-container').innerHTML = table;

}

function showMainMenu() {

    if (playMusic == true) {
        document.getElementById('buttonSelectSound').play();
    }

    $('div#mainUI').show();
    $('div#pageFooter').show();
    $('div#selectPlayerNameUI').hide();
    $('div#selectPlayerRoleUI').hide();
    $('div#levelUI').hide();
    $('div#preGameQuestionnaireUI').hide();
    $('div#postGameQuestionnaireUI').hide();
    $('div#leaderboardUI').hide();
    $('div#exitGameUI').hide();

}

function showPreGameQuestionnaireUI() {

    let regex = /^[a-z0-9@._+-]+$/i;

    playerName = document.getElementById("playerNameBox").value;
    playerName = DOMPurify.sanitize(playerName);


    if (playerName == "" || avatarId == 100) {
        if (playMusic == true) {
            document.getElementById('buttonErrorSound').play();
        }
        $('div#emptyPlayerNameErrorPopUp1').show();
    } else if (!regex.test(playerName) || playerName.length > 15) {
        if (playMusic == true) {
            document.getElementById('buttonErrorSound').play();
        }
        $('div#playerNameErrorPopUp1').show();
    } else {
        $('div#mainUI').hide();
        $('div#pageFooter').hide();
        $('div#selectPlayerNameUI').hide();
        $('div#selectPlayerRoleUI').hide();
        $('div#preGameQuestionnaireUI').show();
        $('div#levelUI').hide();
        $('div#postGameQuestionnaireUI').hide();
        $('div#leaderboardUI').hide();
        $('div#exitGameUI').hide();
    }

}

function showPostGameQuestionnaireUI() {

    if (playMusic == true) {
        document.getElementById('buttonSelectSound').play();
    }
    $('div#mainUI').hide();
    $('div#pageFooter').hide();
    $('div#selectPlayerNameUI').hide();
    $('div#selectPlayerRoleUI').hide();
    $('div#preGameQuestionnaireUI').hide();
    $('div#levelUI').hide();
    $('div#postGameQuestionnaireUI').show();
    $('div#leaderboardUI').hide();
    $('div#exitGameUI').hide();


    
    const safePlayerName = DOMPurify.sanitize(playerName);
    const safeAvatarId = DOMPurify.sanitize(avatarId);

    
    const safePlayerScore = parseInt(DOMPurify.sanitize(document.getElementById('playerScoreInGame').innerText), 10) || 0;
    const safePlayerRolesPlayed = DOMPurify.sanitize(playerRolesPlayed)

    const playerData = {
        playerName: safePlayerName, 
        avatarId: safeAvatarId,
        playerScore: parseInt(safePlayerScore, 10),
        playerRolesPlayed: safePlayerRolesPlayed 
    };

    const sessionKey = playerName + "_" + new Date().getTime(); 
    localStorage.setItem(sessionKey, JSON.stringify(playerData));


}


function htmlEncode(input) {
    return input
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/\'/g, '&#x27;')
        .replace(/`/g, '&#x60;');
}

function getAllPlayersData() {
    const players = [];
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        try {
            const playerData = JSON.parse(localStorage.getItem(key));
            if (playerData && playerData.playerName) { 
                players.push(playerData);
            }
        } catch (e) {
            
            continue;
        }
    }

    players.sort((a, b) => b.playerScore - a.playerScore);
    return players;
}


function showExitGameUI() {


    document.getElementById("endSessionPlayerConfirmation").innerHTML = playerName;
    $('div#mainUI').hide();
    $('div#pageFooter').hide();
    $('div#selectPlayerNameUI').hide();
    $('div#selectPlayerRoleUI').hide();
    $('div#preGameQuestionnaireUI').hide();
    $('div#levelUI').hide();
    $('div#postGameQuestionnaireUI').hide();
    $('div#leaderboardUI').hide();
    $('div#exitGameUI').show();
}


function selectPlayerAvatar(iD) {

    if (playMusic == true) {
        document.getElementById('buttonSelectSound').play();
    }
    prevAvatarId = avatarId;
    avatarId = iD;


    const playerAvatars = document.getElementsByClassName('playerAvatars');

    switch (avatarId) {
        case 0:

            document.getElementById("avatar0").setAttribute("style", "border:0.4vw solid #0df27e;border-radius: 1vw;");


            break;
        case 1:

            document.getElementById("avatar1").setAttribute("style", "border:0.4vw solid #0df27e;border-radius: 1vw;");


            break;
        case 2:

            document.getElementById("avatar2").setAttribute("style", "border:0.4vw solid #0df27e;border-radius: 1vw;");


            break;
        case 3:

            document.getElementById("avatar3").setAttribute("style", "border:0.4vw solid #0df27e;border-radius: 1vw;");


            break;
        case 4:

            document.getElementById("avatar4").setAttribute("style", "border:0.4vw solid #0df27e;border-radius: 1vw;");


            break;
        case 5:


            document.getElementById("avatar5").setAttribute("style", "border:0.4vw solid #0df27e;border-radius: 1vw;");



            break;

    }

    if (prevAvatarId != avatarId) {
        playerAvatars[prevAvatarId].setAttribute("style", "border:0.4vw solid #000000;border-radius: 1vw;");
    }
}



function showSelectPlayerRoleUI() {


    $('div#mainUI').hide();
    $('div#pageFooter').hide();
    $('div#selectPlayerNameUI').hide();
    $('div#selectPlayerRoleUI').show();
    $('div#preGameQuestionnaireUI').hide();
    $('div#levelUI').hide();
    $('div#postGameQuestionnaireUI').hide();
    $('div#leaderboardUI').hide();
    $('div#exitGameUI').hide();

}


function selectPlayerRole(iD) {

    if (playMusic == true) {
        document.getElementById('buttonSelectSound').play();
    }
    prevRoleId = roleId;
    roleId = iD;


    const playerRoleAvatars = document.getElementsByClassName('playerRoleAvatars');

    switch (roleId) {
        case 0:

            document.getElementById("playerRoleavatar0").setAttribute("style", "border:8px solid #0df27e;border-radius: 25px;");
            showLevel();

            break;
        case 1:

            document.getElementById("playerRoleavatar1").setAttribute("style", "border:8px solid #0df27e;border-radius: 25px;");
            showLevel();


            break;
        case 2:

            document.getElementById("playerRoleavatar2").setAttribute("style", "border:8px solid #0df27e;border-radius: 25px;");
            showLevel();


            break;


    }

    if (prevRoleId != roleId)

        playerRoleAvatars[prevRoleId].setAttribute("style", "border:5px solid rgb(255, 255, 255);border-radius: 25px;");

}


function showLevel() {


    const playerNameInGameClass = document.getElementsByClassName('playerNameInGame');
    const playerAvatarInGameClass = document.getElementsByClassName('playerAvatarInGame');

    const questionAnswerTiles = document.getElementsByClassName('questionTile');




    playerNameInGameClass[0].innerText = playerName;
    if (avatarId == 0) {
        playerAvatarInGameClass[0].src = "images/avatars/avatar1.png";
    } else if (avatarId == 1) {
        playerAvatarInGameClass[0].src = "images/avatars/avatar2.png";
    } else if (avatarId == 2) {
        playerAvatarInGameClass[0].src = "images/avatars/avatar3.png";
    } else if (avatarId == 3) {
        playerAvatarInGameClass[0].src = "images/avatars/avatar4.png";
    } else if (avatarId == 4) {
        playerAvatarInGameClass[0].src = "images/avatars/avatar5.png";
    } else if (avatarId == 5) {
        playerAvatarInGameClass[0].src = "images/avatars/avatar6.png";
    }




    if (roleId == 100) {
        if (playMusic == true) {
            document.getElementById('buttonErrorSound').play();
        }
        $('div#emptyPlayerRoleErrorPopUp1').show();
    } else if (roleId == 0) {

        if (playMusic == true) {
            document.getElementById('buttonSelectSound').play();
        }
        $('div#mainUI').hide();
        $('div#pageFooter').hide();
        $('div#selectPlayerNameUI').hide();
        $('div#selectPlayerRoleUI').hide();
        $('div#preGameQuestionnaireUI').hide();
        $('div#levelUI').show();
        $('div#postGameQuestionnaireUI').hide();
        $('div#leaderboardUI').hide();
        $('div#exitGameUI').hide();


        if (currentLevelNo == 1 || currentLevelNo == 200) {


            if (!initialTimerStarted) {

                initialTimerStarted = true;
                setTimeout(startLevelTimer, 10000);
            }


            $('#level1gif').fadeIn(0);
            document.getElementById('level1gif').style.visibility = "visible";
            $('#level1gif').fadeOut(4000);

            if (rolesPlayed.length == 0) {
                setTimeout(showinteractivityInfoPopUp, 5000);
            }

            questionTile1Selected = false;
            questionTile2Selected = false;
            questionTile3Selected = false;
            questionTile4Selected = false;

            for (let i = 0; i < questionAnswerTiles.length; i++) {
                questionAnswerTiles[i].setAttribute("style", "border:5px solid rgb(255, 255, 255);border-radius: 25px;");
            }
            fm.setPercentage(0 + ((levelsCompleted.length + 1) * levelMultiplier));
            document.getElementById("questionImageContainer").src = "images/levels/Level-Image.png";
            const questionTextContainerVariable = document.getElementById("questionTextContainer");
            const questionTextContainer1Variable = document.getElementById("questionTextContainer1");
            const questionImageContainerVariable = document.getElementById("questionImageContainer");
            const questionInteractivityButtonVariable = document.getElementById("InteractivityButton1");

            questionTextContainerVariable.setAttribute("style", "color: rgb(255, 255, 255);font-family: 'Calibri', serif; font-size: 2vw;font-weight: bold;position:fixed;top:54%;left:20%;width: 50%;height:20%;word-wrap: break-word;line-height: normal;z-index: 0;visibility: visible;");
            questionTextContainer1Variable.setAttribute("style", "color: rgb(255, 0, 0);font-size: 1.5vw;position:fixed;top:10%;left:15%;font-weight: bold;background-color: #000000;width: 70%;visibility: visible;");
            questionImageContainerVariable.setAttribute("style", "position:fixed;top:4%;left:10%;width:70%;height:50%;z-index: 0;visibility: visible;");
            questionInteractivityButtonVariable.setAttribute("style", "top:15%;left:46%;height: 8%;width: 4%;visibility: visible;");


            document.getElementById("questionHeadingContainer").innerHTML = "Question 1";
            document.getElementById("questionTextContainer").innerHTML = "Change this to Role 1 Level 1 Question 1.";

            document.getElementById("questionTileText1").innerText = "Incorrect Answer 1";
            document.getElementById("questionTileText2").innerText = "Correct Answer 1";
            document.getElementById("questionTileText3").innerText = "Incorrect Answer 2";
            document.getElementById("questionTileText4").innerText = "Correct Answer 2";
            document.getElementById("questionTextContainer1").style.visibility = "hidden";


            calculateTileOrder();
            reorderQuestionTiles();

        } else if (currentLevelNo == 2) {

            for (let i = 0; i < questionAnswerTiles.length; i++) {
                questionAnswerTiles[i].setAttribute("style", "border:5px solid rgb(255, 255, 255);border-radius: 25px;");
            }

            questionTile1Selected = false;
            questionTile2Selected = false;
            questionTile3Selected = false;
            questionTile4Selected = false;

            fm.setPercentage(0 + ((levelsCompleted.length + 1) * levelMultiplier));
            document.getElementById("questionImageContainer").src = "images/levels/Level-Image.png";
            const questionTextContainerVariable = document.getElementById("questionTextContainer");
            const questionTextContainer1Variable = document.getElementById("questionTextContainer1");
            const questionImageContainerVariable = document.getElementById("questionImageContainer");
            const questionInteractivityButtonVariable = document.getElementById("InteractivityButton1");

            questionTextContainerVariable.setAttribute("style", "color: rgb(255, 255, 255);font-family: 'Calibri', serif; font-size: 2vw;font-weight: bold;position:fixed;top:54%;left:20%;width: 50%;height:20%;word-wrap: break-word;line-height: normal;z-index: 0;visibility: visible;");
            questionTextContainer1Variable.setAttribute("style", "color: rgb(255, 0, 0);font-size: 1.25vw;position:fixed;top:65%;left:5%;font-weight: bold;background-color: #000000;width: 70%;visibility: visible;z-index: 0;");
            questionImageContainerVariable.setAttribute("style", "position:fixed;top:5%;left:10%;width:70%;height:50%;z-index: 0;visibility: visible;");
            questionInteractivityButtonVariable.setAttribute("style", "top:16%;left:46%;height: 8%;width: 4%;visibility: visible;");

            document.getElementById("questionHeadingContainer").innerHTML = "Question 2";
            document.getElementById("questionTextContainer").innerHTML = "Change this to Role 1 Level 1 Question 2.";

            document.getElementById("questionTileText1").innerText = "Correct Answer 1";
            document.getElementById("questionTileText2").innerText = "Correct Answer 2";
            document.getElementById("questionTileText3").innerText = "Correct Answer 3";
            document.getElementById("questionTileText4").innerText = "Incorrect Answer 1";


            calculateTileOrder();
            reorderQuestionTiles();

        } else if (currentLevelNo == 3) {

            for (let i = 0; i < questionAnswerTiles.length; i++) {
                questionAnswerTiles[i].setAttribute("style", "border:5px solid rgb(255, 255, 255);border-radius: 25px;");
            }

            questionTile1Selected = false;
            questionTile2Selected = false;
            questionTile3Selected = false;
            questionTile4Selected = false;

            fm.setPercentage(0 + ((levelsCompleted.length + 1) * levelMultiplier));
            const questionTextContainerVariable = document.getElementById("questionTextContainer");
            const questionTextContainer1Variable = document.getElementById("questionTextContainer1");
            const questionImageContainerVariable = document.getElementById("questionImageContainer");
            const InteractivityButton1Variable = document.getElementById("InteractivityButton1");

            questionTextContainerVariable.setAttribute("style", "color: rgb(255, 255, 255);font-family: 'Calibri', serif; font-size: 2vw;font-weight: bold;position:fixed;top:10%;left:20%;width: 50%;height:20%;word-wrap: break-word;line-height: normal;z-index: -1;visibility: visible;");
            questionTextContainer1Variable.setAttribute("style", "color: rgb(255, 0, 0);font-size: 1.5vw;position:fixed;top:30%;left:15%;font-weight: bold;background-color: #000000;width: 55%;line-height: normal;visibility: visible;z-index: 0;");
            questionImageContainerVariable.setAttribute("style", "position:fixed;top:4%;left:15%;transform: scale(0.75, 0.75);z-index: 0;visibility: visible;");
            InteractivityButton1Variable.setAttribute("style", "position:fixed;top:36%;left:65%;height: 8%;width: 4%;z-index: 1;");
            document.getElementById("InteractivityButton1").style.visibility = "visible";

            document.getElementById("questionImageContainer").style.visibility = "hidden";

            document.getElementById("questionHeadingContainer").innerHTML = "Question 3";
            document.getElementById("questionTextContainer").innerHTML = "Change this to Role 1 Level 1 Question 3.";
            

            document.getElementById("questionTileText1").innerText = "Correct Answer 1";
            document.getElementById("questionTileText2").innerText = "Correct Answer 2";
            document.getElementById("questionTileText3").innerText = "Correct Answer 3";
            document.getElementById("questionTileText4").innerText = "Correct Answer 4";


            calculateTileOrder();
            reorderQuestionTiles();
        } else if (currentLevelNo == 4) {

            $('#level2gif').fadeIn(0);
            document.getElementById('level2gif').style.visibility = "visible";
            $('#level2gif').fadeOut(4000);


            questionTile1Selected = false;
            questionTile2Selected = false;
            questionTile3Selected = false;
            questionTile4Selected = false;

            fm.setPercentage(0 + ((levelsCompleted.length + 1) * levelMultiplier));

            for (let i = 0; i < questionAnswerTiles.length; i++) {
                questionAnswerTiles[i].setAttribute("style", "border:5px solid rgb(255, 255, 255);border-radius: 25px;");
            }

            document.getElementById("questionImageContainer").src = "images/levels/Level-Image.png";
            document.getElementById("questionImageContainer").style.visibility = "visible";
            const questionTextContainerVariable = document.getElementById("questionTextContainer");
            const questionTextContainer1Variable = document.getElementById("questionTextContainer1");
            const questionImageContainerVariable = document.getElementById("questionImageContainer");
            const InteractivityButton1Variable = document.getElementById("InteractivityButton1");

            questionTextContainerVariable.setAttribute("style", "color: rgb(255, 255, 255);font-family: 'Calibri', serif; font-size: 2vw;font-weight: bold;position:fixed;top:54%;left:20%;width: 50%;height:20%;word-wrap: break-word;line-height: normal;z-index: 0;visibility: visible;");
            questionTextContainer1Variable.setAttribute("style", "color: rgb(255, 0, 0);font-size: 1.25vw;position:fixed;top:10%;left:15%;font-weight: bold;background-color: #000000;width: 1550px;visibility: visible;");
            questionImageContainerVariable.setAttribute("style", "position:fixed;top:3%;left:10%;height:60%;width:70%;z-index: 0;visibility: visible;");
            InteractivityButton1Variable.setAttribute("style", "position:fixed;top:28%;left:45%;z-index: 1;height: 8%;width: 4%;");
            document.getElementById("InteractivityButton1").style.visibility = "visible";

            document.getElementById("questionHeadingContainer").innerHTML = "Question 1";
            document.getElementById("questionTextContainer").innerHTML = "Change this to Role 1 Level 2 Question 1.";

            document.getElementById("questionTextContainer1").style.visibility = "hidden";


            document.getElementById("questionTileText1").innerText = "Incorrect Answer 1";
            document.getElementById("questionTileText2").innerText = "Incorrect Answer 2";
            document.getElementById("questionTileText3").innerText = "Correct Answer 1";
            document.getElementById("questionTileText4").innerText = "Correct Answer 2";


            calculateTileOrder();
            reorderQuestionTiles();

        } else if (currentLevelNo == 5) {

            for (let i = 0; i < questionAnswerTiles.length; i++) {
                questionAnswerTiles[i].setAttribute("style", "border:5px solid rgb(255, 255, 255);border-radius: 25px;");
            }


            questionTile1Selected = false;
            questionTile2Selected = false;
            questionTile3Selected = false;
            questionTile4Selected = false;

            fm.setPercentage(0 + ((levelsCompleted.length + 1) * levelMultiplier));
            const questionTextContainerVariable = document.getElementById("questionTextContainer");
            const questionTextContainer1Variable = document.getElementById("questionTextContainer1");
            const questionImageContainerVariable = document.getElementById("questionImageContainer");
            const InteractivityButton1Variable = document.getElementById("InteractivityButton1");

            questionTextContainerVariable.setAttribute("style", "color: rgb(255, 255, 255);font-family: 'Calibri', serif; font-size: 2vw;font-weight: bold;position:fixed;top:8%;left:15%;width: 57%;word-wrap: break-word;line-height: normal;z-index: -1;visibility: visible;");
            questionTextContainer1Variable.setAttribute("style", "color: rgb(255, 0, 0);font-size: 1.7vw;position:fixed;top:30%;left:15%;font-weight: bold;background-color: #000000;width: 57%;line-height: normal;visibility: visible;z-index: 0;");
            questionImageContainerVariable.setAttribute("style", "position:fixed;top:4%;left:15%;transform: scale(0.75, 0.75);z-index: 0;visibility: visible;");
            InteractivityButton1Variable.setAttribute("style", "position:fixed;top:24%;left:65%;z-index: 1;height: 8%;width: 4%;");
            document.getElementById("InteractivityButton1").style.visibility = "visible";

            document.getElementById("questionImageContainer").style.visibility = "hidden";

            document.getElementById("questionHeadingContainer").innerHTML = "Question 2";
            document.getElementById("questionTextContainer").innerHTML = "Change this to Role 1 Level 2 Question 2.";

            document.getElementById("questionTileText1").innerText = "Correct Answer 1";
            document.getElementById("questionTileText2").innerText = "Correct Answer 2";
            document.getElementById("questionTileText3").innerText = "Correct Answer 3";
            document.getElementById("questionTileText4").innerText = "Incorrect Answer 1";


            calculateTileOrder();
            reorderQuestionTiles();
        } else if (currentLevelNo == 6) {

            for (let i = 0; i < questionAnswerTiles.length; i++) {
                questionAnswerTiles[i].setAttribute("style", "border:5px solid rgb(255, 255, 255);border-radius: 25px;");
            }



            questionTile1Selected = false;
            questionTile2Selected = false;
            questionTile3Selected = false;
            questionTile4Selected = false;

            fm.setPercentage(0 + ((levelsCompleted.length + 1) * levelMultiplier));

            const questionTextContainerVariable = document.getElementById("questionTextContainer");
            const questionTextContainer1Variable = document.getElementById("questionTextContainer1");
            const questionImageContainerVariable = document.getElementById("questionImageContainer");

            questionTextContainerVariable.setAttribute("style", "color: rgb(255, 255, 255);font-family: 'Calibri', serif; font-size: 2vw;font-weight: bold;position:fixed;top:10%;left:20%;width: 50%;height:20%;word-wrap: break-word;line-height: normal;z-index: -1;visibility: visible;");
            questionTextContainer1Variable.setAttribute("style", "color: rgb(255, 0, 0);font-size: 1.25vw;position:fixed;top:10%;left:15%;font-weight: bold;background-color: #000000;width: 60%;visibility: visible;");
            questionImageContainerVariable.setAttribute("style", "position:fixed;top:4%;left:15%;transform: scale(0.75, 0.75);z-index: 0;visibility: visible;");
            document.getElementById("questionTextContainer1").style.visibility = "hidden";
            document.getElementById("questionImageContainer").style.visibility = "hidden";
            document.getElementById("InteractivityButton1").style.visibility = "hidden";

            document.getElementById("questionHeadingContainer").innerHTML = "Question 3";
            document.getElementById("questionTextContainer").innerHTML = "Change this to Role 1 Level 2 Question 3.";



            document.getElementById("questionTileText1").innerText = "Correct Answer 1";
            document.getElementById("questionTileText2").innerText = "Incorrect Answer 1";
            document.getElementById("questionTileText3").innerText = "Correct Answer 2";
            document.getElementById("questionTileText4").innerText = "Incorrect Answer 2";


            calculateTileOrder();
            reorderQuestionTiles();

        } else if (currentLevelNo == 7) {

            $('#level3gif').fadeIn(0);
            document.getElementById('level3gif').style.visibility = "visible";
            $('#level3gif').fadeOut(4000);

            for (let i = 0; i < questionAnswerTiles.length; i++) {
                questionAnswerTiles[i].setAttribute("style", "border:5px solid rgb(255, 255, 255);border-radius: 25px;");
            }


            questionTile1Selected = false;
            questionTile2Selected = false;
            questionTile3Selected = false;
            questionTile4Selected = false;

            fm.setPercentage(0 + ((levelsCompleted.length + 1) * levelMultiplier));

            const questionTextContainerVariable = document.getElementById("questionTextContainer");
            const questionTextContainer1Variable = document.getElementById("questionTextContainer1");
            const questionImageContainerVariable = document.getElementById("questionImageContainer");
            const InteractivityButton1Variable = document.getElementById("InteractivityButton1");

            questionTextContainerVariable.setAttribute("style", "color: rgb(255, 255, 255);font-family: 'Calibri', serif; font-size: 2vw;font-weight: bold;position:fixed;top:54%;left:20%;width: 50%;height:20%;word-wrap: break-word;line-height: normal;z-index: 0;visibility: visible;");
            questionTextContainer1Variable.setAttribute("style", "color: rgb(255, 0, 0);font-size: 1.2vw;position:fixed;top:63%;left:3%;font-weight: bold;background-color: #000000;width: 70%;visibility: visible;z-index:0;");
            questionImageContainerVariable.setAttribute("style", "position:fixed;top:4%;left:10%;width:70%;height:50%;z-index: 0;visibility: visible;");
            document.getElementById("questionTextContainer1").style.visibility = "visible";
            document.getElementById("questionImageContainer").style.visibility = "visible";
            document.getElementById("InteractivityButton1").style.visibility = "visible";

            InteractivityButton1Variable.setAttribute("style", "position:fixed;top:13%;left:40%;z-index: 1;height: 8%;width: 4%;");


            document.getElementById("questionImageContainer").src = "images/levels/Level-Image.png";

            document.getElementById("questionHeadingContainer").innerHTML = "Question 1";
            document.getElementById("questionHeadingContainer").style.top = "-3%";
            document.getElementById("questionTextContainer").innerHTML = "Change this to Role 1 Level 3 Question 1.";


            document.getElementById("questionTileText1").innerText = "Correct Answer 1";
            document.getElementById("questionTileText2").innerText = "Correct Answer 2";
            document.getElementById("questionTileText3").innerText = "Correct Answer 3";
            document.getElementById("questionTileText4").innerText = "Incorrect Answer 1";


            calculateTileOrder();
            reorderQuestionTiles();

        } else if (currentLevelNo == 8) {

            for (let i = 0; i < questionAnswerTiles.length; i++) {
                questionAnswerTiles[i].setAttribute("style", "border:5px solid rgb(255, 255, 255);border-radius: 25px;");
            }



            questionTile1Selected = false;
            questionTile2Selected = false;
            questionTile3Selected = false;
            questionTile4Selected = false;

            fm.setPercentage(0 + ((levelsCompleted.length + 1) * levelMultiplier));

            const questionTextContainerVariable = document.getElementById("questionTextContainer");
            const questionTextContainer1Variable = document.getElementById("questionTextContainer1");
            const questionImageContainerVariable = document.getElementById("questionImageContainer");
            const InteractivityButton1Variable = document.getElementById("InteractivityButton1");

            questionTextContainerVariable.setAttribute("style", "color: rgb(255, 255, 255);font-family: 'Calibri', serif; font-size: 2vw;font-weight: bold;position:fixed;top:54%;left:20%;width: 50%;height:20%;word-wrap: break-word;line-height: normal;z-index: 0;visibility: visible;");
            questionTextContainer1Variable.setAttribute("style", "color: rgb(255, 0, 0);font-size: 1.3vw;position:fixed;top:60%;left:15%;font-weight: bold;background-color: #000000;width: 55%;visibility: visible;z-index: 0;");
            questionImageContainerVariable.setAttribute("style", "position:fixed;top:4%;left:10%;width:70%;height:50%;z-index: 0;visibility: visible;");
            document.getElementById("questionTextContainer1").style.visibility = "visible";
            document.getElementById("questionImageContainer").style.visibility = "visible";
            InteractivityButton1Variable.setAttribute("style", "position:fixed;top:23%;left:65%;z-index: 1;height: 8%;width: 4%;visibility: visible;");

            document.getElementById("questionImageContainer").src = "images/levels/Level-Image.png";

            document.getElementById("questionHeadingContainer").innerHTML = "Question 2";
            document.getElementById("questionTextContainer").innerHTML = "Change this to Role 1 Level 3 Question 2.";



            document.getElementById("questionTileText1").innerText = "Correct Answer 1";
            document.getElementById("questionTileText2").innerText = "Correct Answer 2";
            document.getElementById("questionTileText3").innerText = "Incorrect Answer 1";
            document.getElementById("questionTileText4").innerText = "Correct Answer 3";


            calculateTileOrder();
            reorderQuestionTiles();

        } else if (currentLevelNo == 9) {

            for (let i = 0; i < questionAnswerTiles.length; i++) {
                questionAnswerTiles[i].setAttribute("style", "border:5px solid rgb(255, 255, 255);border-radius: 25px;");
            }



            questionTile1Selected = false;
            questionTile2Selected = false;
            questionTile3Selected = false;
            questionTile4Selected = false;

            fm.setPercentage(0 + ((levelsCompleted.length + 1) * levelMultiplier));

            const questionTextContainerVariable = document.getElementById("questionTextContainer");
            const questionTextContainer1Variable = document.getElementById("questionTextContainer1");
            const questionImageContainerVariable = document.getElementById("questionImageContainer");

            questionTextContainerVariable.setAttribute("style", "color: rgb(255, 255, 255);font-family: 'Calibri', serif; font-size: 2vw;font-weight: bold;position:fixed;top:10%;left:20%;width: 50%;height:20%;word-wrap: break-word;line-height: normal;z-index: -1;visibility: visible;");
            questionTextContainer1Variable.setAttribute("style", "color: rgb(255, 0, 0);font-size: 1.25vw;position:fixed;top:10%;left:15%;font-weight: bold;background-color: #000000;width: 60%;visibility: visible;");
            questionImageContainerVariable.setAttribute("style", "position:fixed;top:4%;left:15%;transform: scale(0.75, 0.75);z-index: 0;visibility: visible;");
            document.getElementById("questionTextContainer1").style.visibility = "hidden";
            document.getElementById("questionImageContainer").style.visibility = "hidden";
            document.getElementById("InteractivityButton1").style.visibility = "hidden";

            document.getElementById("questionHeadingContainer").innerHTML = "Question 3";
            document.getElementById("questionTextContainer").innerHTML = "Change this to Role 1 Level 3 Question 3.";



            document.getElementById("questionTileText1").innerText = "Incorrect Answer 1";
            document.getElementById("questionTileText2").innerText = "Incorrect Answer 2";
            document.getElementById("questionTileText3").innerText = "Correct Answer 1";
            document.getElementById("questionTileText4").innerText = "Correct Answer 2";


            calculateTileOrder();
            reorderQuestionTiles();
            initialTimerStarted = false;
        }

    } else if (roleId == 1) {

        $('div#mainUI').hide();
        $('div#pageFooter').hide();
        $('div#selectPlayerNameUI').hide();
        $('div#selectPlayerRoleUI').hide();
        $('div#preGameQuestionnaireUI').hide();
        $('div#levelUI').show();
        $('div#postGameQuestionnaireUI').hide();
        $('div#leaderboardUI').hide();
        $('div#exitGameUI').hide();

        if (currentLevelNo == 1 || currentLevelNo == 200) {

            if (!initialTimerStarted) {

                initialTimerStarted = true;
                setTimeout(startLevelTimer, 10000);
            }


            $('#level1gif').fadeIn(0);
            document.getElementById('level1gif').style.visibility = "visible";
            $('#level1gif').fadeOut(4000);

            if (rolesPlayed.length == 0) {
                setTimeout(showinteractivityInfoPopUp, 5000);
            }


            questionTile1Selected = false;
            questionTile2Selected = false;
            questionTile3Selected = false;
            questionTile4Selected = false;

            fm.setPercentage(0 + ((levelsCompleted.length + 1) * levelMultiplier));

            for (let i = 0; i < questionAnswerTiles.length; i++) {
                questionAnswerTiles[i].setAttribute("style", "border:5px solid rgb(255, 255, 255);border-radius: 25px;");
            }

            document.getElementById("questionImageContainer").src = "images/levels/Level-Image.png";

            const questionTextContainerVariable = document.getElementById("questionTextContainer");
            const questionTextContainer1Variable = document.getElementById("questionTextContainer1");
            const questionImageContainerVariable = document.getElementById("questionImageContainer");
            const InteractivityButton1Variable = document.getElementById("InteractivityButton1");

            questionTextContainerVariable.setAttribute("style", "color: rgb(255, 255, 255);font-family: 'Calibri', serif; font-size: 2vw;font-weight: bold;position:fixed;top:54%;left:20%;width: 50%;height:20%;word-wrap: break-word;line-height: normal;z-index: 0;visibility: visible;");
            questionTextContainer1Variable.setAttribute("style", "color: rgb(255, 0, 0);font-size: 1.25vw;position:fixed;top:40%;left:15%;font-weight: bold;background-color: #000000;width: 50%;visibility: visible;");
            questionImageContainerVariable.setAttribute("style", "position:fixed;top:4%;left:10%;width:70%;height:50%;z-index: 0;visibility: visible;");

            InteractivityButton1Variable.setAttribute("style", "position:fixed;top:20%;left:46%;z-index: 1;height: 8%;width: 4%;visibility: visible;");

            document.getElementById("questionHeadingContainer").innerHTML = "Question 1";
            document.getElementById("questionTextContainer").innerHTML = "Change this to Role 2 Level 1 Question 1.";

            document.getElementById("questionTileText1").innerText = "Incorrect Answer 1";
            document.getElementById("questionTileText2").innerText = "Correct Answer 1";
            document.getElementById("questionTileText3").innerText = "Correct Answer 2";
            document.getElementById("questionTileText4").innerText = "Incorrect Answer 2";
            document.getElementById("questionTextContainer1").style.visibility = "hidden";


            calculateTileOrder();
            reorderQuestionTiles();
        } else if (currentLevelNo == 2) {

            questionTile1Selected = false;
            questionTile2Selected = false;
            questionTile3Selected = false;
            questionTile4Selected = false;

            fm.setPercentage(0 + ((levelsCompleted.length + 1) * levelMultiplier));

            for (let i = 0; i < questionAnswerTiles.length; i++) {
                questionAnswerTiles[i].setAttribute("style", "border:5px solid rgb(255, 255, 255);border-radius: 25px;");
            }

            document.getElementById("questionImageContainer").src = "images/levels/Level-Image.png";

            const questionTextContainerVariable = document.getElementById("questionTextContainer");
            const questionTextContainer1Variable = document.getElementById("questionTextContainer1");
            const questionImageContainerVariable = document.getElementById("questionImageContainer");
            const InteractivityButton1Variable = document.getElementById("InteractivityButton1");


            questionTextContainerVariable.setAttribute("style", "color: rgb(255, 255, 255);font-family: 'Calibri', serif; font-size: 2vw;font-weight: bold;position:fixed;top:54%;left:20%;width: 50%;height:20%;word-wrap: break-word;line-height: normal;z-index: 0;visibility: visible;");
            questionTextContainer1Variable.setAttribute("style", "color: rgb(255, 0, 0);font-size: 1.25vw;position:fixed;top:10%;left:15%;font-weight: bold;background-color: #000000;width: 1550px;visibility: visible;");
            questionImageContainerVariable.setAttribute("style", "position:fixed;top:4%;left:10%;height:50%;width:70%;z-index: 0;visibility: visible;");
            InteractivityButton1Variable.setAttribute("style", "position:fixed;top:23%;left:50%;z-index: 1;height: 8%;width: 4%;");
            document.getElementById("InteractivityButton1").style.visibility = "visible";

            document.getElementById("questionHeadingContainer").innerHTML = "Question 2";
            document.getElementById("questionTextContainer").innerHTML = "Change this to Role 2 Level 1 Question 2.";



            document.getElementById("questionTileText1").innerText = "Incorrect Answer 1";
            document.getElementById("questionTileText2").innerText = "Incorrect Answer 2";
            document.getElementById("questionTileText3").innerText = "Correct Answer 1";
            document.getElementById("questionTileText4").innerText = "Correct Answer 2";
            document.getElementById("questionTextContainer1").style.visibility = "hidden";


            calculateTileOrder();
            reorderQuestionTiles();
        } else if (currentLevelNo == 3) {

            $('#level2gif').fadeIn(0);
            document.getElementById('level2gif').style.visibility = "visible";
            $('#level2gif').fadeOut(4000);


            questionTile1Selected = false;
            questionTile2Selected = false;
            questionTile3Selected = false;
            questionTile4Selected = false;

            fm.setPercentage(0 + ((levelsCompleted.length + 1) * levelMultiplier));

            for (let i = 0; i < questionAnswerTiles.length; i++) {
                questionAnswerTiles[i].setAttribute("style", "border:5px solid rgb(255, 255, 255);border-radius: 25px;");
            }

            const questionTextContainerVariable = document.getElementById("questionTextContainer");
            const questionTextContainer1Variable = document.getElementById("questionTextContainer1");
            const questionImageContainerVariable = document.getElementById("questionImageContainer");
            const InteractivityButton1Variable = document.getElementById("InteractivityButton1");

            questionTextContainerVariable.setAttribute("style", "color: rgb(255, 255, 255);font-family: 'Calibri', serif; font-size: 2vw;font-weight: bold;position:fixed;top:54%;left:20%;width: 50%;height:20%;word-wrap: break-word;line-height: normal;z-index: 0;visibility: visible;");
            questionTextContainer1Variable.setAttribute("style", "color: rgb(255, 0, 0);font-size: 1.25vw;position:fixed;top:63%;left:3%;font-weight: bold;background-color: #000000;width: 70%;visibility: visible;z-index:0;");
            questionImageContainerVariable.setAttribute("style", "position:fixed;top:4%;left:10%;width:70%;height:50%;z-index: 0;visibility: visible;");
            document.getElementById("questionTextContainer1").style.visibility = "visible";
            document.getElementById("questionImageContainer").style.visibility = "visible";
            document.getElementById("InteractivityButton1").style.visibility = "visible";

            InteractivityButton1Variable.setAttribute("style", "position:fixed;top:12%;left:38%;z-index: 1;height: 8%;width: 4%;");


            document.getElementById("questionImageContainer").src = "images/levels/Level-Image.png";

            document.getElementById("questionHeadingContainer").innerHTML = "Question 1";
            document.getElementById("questionHeadingContainer").style.top = "-3%";
            document.getElementById("questionTextContainer").innerHTML = "Change this to Role 2 Level 2 Question 1.";
            


            document.getElementById("questionTileText1").innerText = "Correct Answer 1";
            document.getElementById("questionTileText2").innerText = "Correct Answer 2";
            document.getElementById("questionTileText3").innerText = "Correct Answer 3";
            document.getElementById("questionTileText4").innerText = "Incorrect Answer 1";


            calculateTileOrder();
            reorderQuestionTiles();
        } else if (currentLevelNo == 4) {


            questionTile1Selected = false;
            questionTile2Selected = false;
            questionTile3Selected = false;
            questionTile4Selected = false;

            fm.setPercentage(0 + ((levelsCompleted.length + 1) * levelMultiplier));

            for (let i = 0; i < questionAnswerTiles.length; i++) {
                questionAnswerTiles[i].setAttribute("style", "border:5px solid rgb(255, 255, 255);border-radius: 25px;");
            }

            const questionTextContainerVariable = document.getElementById("questionTextContainer");
            const questionTextContainer1Variable = document.getElementById("questionTextContainer1");
            const questionImageContainerVariable = document.getElementById("questionImageContainer");
            const InteractivityButton1Variable = document.getElementById("InteractivityButton1");

            questionTextContainerVariable.setAttribute("style", "color: rgb(255, 255, 255);font-family: 'Calibri', serif; font-size: 2vw;font-weight: bold;position:fixed;top:54%;left:20%;width: 50%;height:20%;word-wrap: break-word;line-height: normal;z-index: 0;visibility: visible;");
            questionTextContainer1Variable.setAttribute("style", "color: rgb(255, 0, 0);font-size: 1.3vw;position:fixed;top:60%;left:15%;font-weight: bold;background-color: #000000;width: 55%;visibility: visible;z-index: 0;");
           questionImageContainerVariable.setAttribute("style", "position:fixed;top:4%;left:10%;width:70%;height:50%;z-index: 0;visibility: visible;");
            document.getElementById("questionTextContainer1").style.visibility = "visible";
            document.getElementById("questionImageContainer").style.visibility = "visible";
            InteractivityButton1Variable.setAttribute("style", "position:fixed;top:25%;left:60%;z-index: 1;height: 8%;width: 4%;visibility: visible;");

            document.getElementById("questionImageContainer").src = "images/levels/Level-Image.png";

            document.getElementById("questionHeadingContainer").innerHTML = "Question 2";
            document.getElementById("questionTextContainer").innerHTML = "Change this to Role 2 Level 2 Question 2.";
            


            document.getElementById("questionTileText1").innerText = "Correct Answer 1";
            document.getElementById("questionTileText2").innerText = "Correct Answer 2";
            document.getElementById("questionTileText3").innerText = "Correct Answer 3";
            document.getElementById("questionTileText4").innerText = "Incorrect Answer 1";


            calculateTileOrder();
            reorderQuestionTiles();

        } else if (currentLevelNo == 5) {

            $('#level3gif').fadeIn(0);
            document.getElementById('level3gif').style.visibility = "visible";
            $('#level3gif').fadeOut(4000);


            questionTile1Selected = false;
            questionTile2Selected = false;
            questionTile3Selected = false;
            questionTile4Selected = false;

            fm.setPercentage(0 + ((levelsCompleted.length + 1) * levelMultiplier));

            for (let i = 0; i < questionAnswerTiles.length; i++) {
                questionAnswerTiles[i].setAttribute("style", "border:5px solid rgb(255, 255, 255);border-radius: 25px;");
            }

            document.getElementById("questionImageContainer").src = "images/levels/Level-Image.png";

            const questionTextContainerVariable = document.getElementById("questionTextContainer");
            const questionTextContainer1Variable = document.getElementById("questionTextContainer1");
            const questionImageContainerVariable = document.getElementById("questionImageContainer");
            const InteractivityButton1Variable = document.getElementById("InteractivityButton1");

            questionTextContainerVariable.setAttribute("style", "color: rgb(255, 255, 255);font-family: 'Calibri', serif; font-size: 2vw;font-weight: bold;position:fixed;top:54%;left:20%;width: 50%;height:20%;word-wrap: break-word;line-height: normal;z-index: 0;visibility: visible;");
            questionTextContainer1Variable.setAttribute("style", "color: rgb(255, 0, 0);font-size: 1.25vw;position:fixed;top:10%;left:15%;font-weight: bold;background-color: #000000;width: 50%;visibility: visible;");
            questionImageContainerVariable.setAttribute("style", "position:fixed;top:4%;left:10%;height:53%;width:70%;z-index: 0;visibility: visible;");
            InteractivityButton1Variable.setAttribute("style", "position:fixed;top:25%;left:55%;z-index: 1;height: 8%;width: 4%;");
            document.getElementById("InteractivityButton1").style.visibility = "visible";

            document.getElementById("questionHeadingContainer").innerHTML = "Question 1";
            document.getElementById("questionTextContainer").innerHTML = "Change this to Role 2 Level 3 Question 1.";



            document.getElementById("questionTileText1").innerText = "Correct Answer 1";
            document.getElementById("questionTileText2").innerText = "Correct Answer 2";
            document.getElementById("questionTileText3").innerText = "Incorrect Answer 1";
            document.getElementById("questionTileText4").innerText = "Incorrect Answer 2";
            document.getElementById("questionTextContainer1").style.visibility = "hidden";


            calculateTileOrder();
            reorderQuestionTiles();
        } else if (currentLevelNo == 6) {


            questionTile1Selected = false;
            questionTile2Selected = false;
            questionTile3Selected = false;
            questionTile4Selected = false;

            fm.setPercentage(0 + ((levelsCompleted.length + 1) * levelMultiplier));

            for (let i = 0; i < questionAnswerTiles.length; i++) {
                questionAnswerTiles[i].setAttribute("style", "border:5px solid rgb(255, 255, 255);border-radius: 25px;");
            }

            document.getElementById("questionImageContainer").src = "images/levels/Level-Image.png";

            const questionTextContainerVariable = document.getElementById("questionTextContainer");
            const questionTextContainer1Variable = document.getElementById("questionTextContainer1");
            const questionImageContainerVariable = document.getElementById("questionImageContainer");

            questionTextContainerVariable.setAttribute("style", "color: rgb(255, 255, 255);font-family: 'Calibri', serif; font-size: 2vw;font-weight: bold;position:fixed;top:54%;left:20%;width: 50%;height:20%;word-wrap: break-word;line-height: normal;z-index: 0;visibility: visible;");
            questionTextContainer1Variable.setAttribute("style", "color: rgb(255, 0, 0);font-size: 1.25vw;position:fixed;top:10%;left:15%;font-weight: bold;background-color: #000000;width: 1550px;visibility: visible;");
            questionImageContainerVariable.setAttribute("style", "position:fixed;top:15%;left:35%;transform: scale(1.5, 1.5);z-index: 0;visibility: visible;");

            document.getElementById("questionHeadingContainer").innerHTML = "Question 2";
            document.getElementById("questionTextContainer").innerHTML = "Change this to Role 2 Level 3 Question 2.";



            document.getElementById("questionTileText1").innerText = "Correct Answer 1";
            document.getElementById("questionTileText2").innerText = "Incorrect Answer 1";
            document.getElementById("questionTileText3").innerText = "Incorrect Answer 2";
            document.getElementById("questionTileText4").innerText = "Correct Answer 2";
            document.getElementById("questionTextContainer1").style.visibility = "hidden";
            document.getElementById("questionImageContainer").style.visibility = "hidden";
            document.getElementById("InteractivityButton1").style.visibility = "hidden";


            calculateTileOrder();
            reorderQuestionTiles();
            initialTimerStarted = false;
        }
    } else if (roleId == 2) {
        $('div#mainUI').hide();
        $('div#pageFooter').hide();
        $('div#selectPlayerNameUI').hide();
        $('div#selectPlayerRoleUI').hide();
        $('div#preGameQuestionnaireUI').hide();
        $('div#levelUI').show();
        $('div#postGameQuestionnaireUI').hide();
        $('div#leaderboardUI').hide();
        $('div#exitGameUI').hide();

        if (currentLevelNo == 1 || currentLevelNo == 200) {

            if (!initialTimerStarted) {

                initialTimerStarted = true;
                setTimeout(startLevelTimer, 10000);
            }



            $('#level1gif').fadeIn(0);
            document.getElementById('level1gif').style.visibility = "visible";
            $('#level1gif').fadeOut(4000);

            if (rolesPlayed.length == 0) {
                setTimeout(showinteractivityInfoPopUp, 5000);
            }


            questionTile1Selected = false;
            questionTile2Selected = false;
            questionTile3Selected = false;
            questionTile4Selected = false;

            fm.setPercentage(0 + ((levelsCompleted.length + 1) * levelMultiplier));

            for (let i = 0; i < questionAnswerTiles.length; i++) {
                questionAnswerTiles[i].setAttribute("style", "border:5px solid rgb(255, 255, 255);border-radius: 25px;");
            }

            const questionTextContainerVariable = document.getElementById("questionTextContainer");
            const questionTextContainer1Variable = document.getElementById("questionTextContainer1");
            const questionImageContainerVariable = document.getElementById("questionImageContainer");
            const questionInteractivityButtonVariable = document.getElementById("InteractivityButton1");

            questionTextContainerVariable.setAttribute("style", "color: rgb(255, 255, 255);font-family: 'Calibri', serif; font-size: 2vw;font-weight: bold;position:fixed;top:10%;left:20%;width: 50%;height:20%;word-wrap: break-word;line-height: normal;z-index: -1;visibility: visible;");
            questionTextContainer1Variable.setAttribute("style", "color: rgb(255, 0, 0);font-size: 1.5vw;position:fixed;top:40%;left:15%;font-weight: bold;background-color: #000000;width: 58%;visibility: visible;line-height: normal;z-index: 0;");
            questionImageContainerVariable.setAttribute("style", "position:fixed;top:4%;left:15%;transform: scale(0.75, 0.75);z-index: 0;visibility: visible;");
            questionInteractivityButtonVariable.setAttribute("style", "position:fixed;top:37.5%;left:60%;z-index: 1;visibility: visible;height: 8%;width: 4%;");

            document.getElementById("questionHeadingContainer").innerHTML = "Question 1";
            document.getElementById("questionTextContainer").innerHTML = "Change this to Role 3 Level 1 Question 1.";

            document.getElementById("questionImageContainer").style.visibility = "hidden";
            

            document.getElementById("questionTileText1").innerText = "Incorrect Answer 1";
            document.getElementById("questionTileText2").innerText = "Incorrect Answer 2";
            document.getElementById("questionTileText3").innerText = "Correct Answer 1";
            document.getElementById("questionTileText4").innerText = "Correct Answer 2";


            calculateTileOrder();
            reorderQuestionTiles();

        } else if (currentLevelNo == 2) {


            questionTile1Selected = false;
            questionTile2Selected = false;
            questionTile3Selected = false;
            questionTile4Selected = false;

            fm.setPercentage(0 + ((levelsCompleted.length + 1) * levelMultiplier));

            for (let i = 0; i < questionAnswerTiles.length; i++) {
                questionAnswerTiles[i].setAttribute("style", "border:5px solid rgb(255, 255, 255);border-radius: 25px;");
            }

            document.getElementById("questionImageContainer").src = "images/levels/Level-Image.png";

            const questionTextContainerVariable = document.getElementById("questionTextContainer");
            const questionTextContainer1Variable = document.getElementById("questionTextContainer1");
            const questionImageContainerVariable = document.getElementById("questionImageContainer");
            const questionInteractivityButtonVariable = document.getElementById("InteractivityButton1");

            questionTextContainerVariable.setAttribute("style", "color: rgb(255, 255, 255);font-family: 'Calibri', serif; font-size: 2vw;font-weight: bold;position:fixed;top:54%;left:20%;width: 50%;height:20%;word-wrap: break-word;line-height: normal;z-index: 0;visibility: visible;");
            questionTextContainer1Variable.setAttribute("style", "color: rgb(255, 0, 0);font-size: 1.25vw;position:fixed;top:10%;left:15%;font-weight: bold;background-color: #000000;width: 1550px;visibility: visible;");
            questionImageContainerVariable.setAttribute("style", "position:fixed;top:5%;left:7%;height:55%;width:75%;z-index: 0;visibility: visible;");
            questionInteractivityButtonVariable.setAttribute("style", "position:fixed;top:20%;left:40%;z-index: 1;visibility: visible;height: 8%;width: 4%;");

            document.getElementById("questionHeadingContainer").innerHTML = "Question 2";
            document.getElementById("questionTextContainer").innerHTML = "Change this to Role 3 Level 1 Question 2.";



            document.getElementById("questionTextContainer1").style.visibility = "hidden";
            document.getElementById("questionTileText1").innerText = "Incorrect Answer 1";
            document.getElementById("questionTileText2").innerText = "Incorrect Answer 2";
            document.getElementById("questionTileText3").innerText = "Correct Answer 1";
            document.getElementById("questionTileText4").innerText = "Correct Answer 2";


            calculateTileOrder();
            reorderQuestionTiles();

        } else if (currentLevelNo == 3) {

            $('#level2gif').fadeIn(0);
            document.getElementById('level2gif').style.visibility = "visible";
            $('#level2gif').fadeOut(4000);


            questionTile1Selected = false;
            questionTile2Selected = false;
            questionTile3Selected = false;
            questionTile4Selected = false;

            fm.setPercentage(0 + ((levelsCompleted.length + 1) * levelMultiplier));

            for (let i = 0; i < questionAnswerTiles.length; i++) {
                questionAnswerTiles[i].setAttribute("style", "border:5px solid rgb(255, 255, 255);border-radius: 25px;");
            }

            const questionTextContainerVariable = document.getElementById("questionTextContainer");
            const questionTextContainer1Variable = document.getElementById("questionTextContainer1");
            const questionImageContainerVariable = document.getElementById("questionImageContainer");

            questionTextContainerVariable.setAttribute("style", "color: rgb(255, 255, 255);font-family: 'Calibri', serif; font-size: 2vw;font-weight: bold;position:fixed;top:10%;left:20%;width: 50%;height:20%;word-wrap: break-word;line-height: normal;z-index: -1;visibility: visible;");
            questionTextContainer1Variable.setAttribute("style", "color: rgb(255, 0, 0);font-size: 1.25vw;position:fixed;top:10%;left:15%;font-weight: bold;background-color: #000000;width: 1550px;visibility: visible;");
            questionImageContainerVariable.setAttribute("style", "position:fixed;top:4%;left:15%;transform: scale(0.75, 0.75);z-index: 0;visibility: visible;");

            document.getElementById("questionImageContainer").style.visibility = "hidden";
            document.getElementById("questionTextContainer1").style.visibility = "hidden";
            document.getElementById("InteractivityButton1").style.visibility = "hidden";

            document.getElementById("questionHeadingContainer").innerHTML = "Question 1";
            document.getElementById("questionTextContainer").innerHTML = "Change this to Role 3 Level 2 Question 1.";


            document.getElementById("questionTileText1").innerText = "Incorrect Answer 1";
            document.getElementById("questionTileText2").innerText = "Correct Answer 1";
            document.getElementById("questionTileText3").innerText = "Correct Answer 2";
            document.getElementById("questionTileText4").innerText = "Incorrect Answer 2";


            calculateTileOrder();
            reorderQuestionTiles();

        } else if (currentLevelNo == 4) {


            questionTile1Selected = false;
            questionTile2Selected = false;
            questionTile3Selected = false;
            questionTile4Selected = false;

            fm.setPercentage(0 + ((levelsCompleted.length + 1) * levelMultiplier));

            for (let i = 0; i < questionAnswerTiles.length; i++) {
                questionAnswerTiles[i].setAttribute("style", "border:5px solid rgb(255, 255, 255);border-radius: 25px;");
            }

            const questionTextContainerVariable = document.getElementById("questionTextContainer");
            const questionTextContainer1Variable = document.getElementById("questionTextContainer1");
            const questionImageContainerVariable = document.getElementById("questionImageContainer");

            questionTextContainerVariable.setAttribute("style", "color: rgb(255, 255, 255);font-family: 'Calibri', serif; font-size: 2vw;font-weight: bold;position:fixed;top:10%;left:20%;width: 50%;height:20%;word-wrap: break-word;line-height: normal;z-index: -1;visibility: visible;");
            questionTextContainer1Variable.setAttribute("style", "color: rgb(255, 0, 0);font-size: 1.25vw;position:fixed;top:10%;left:15%;font-weight: bold;background-color: #000000;width: 58%;visibility: visible;");
            questionImageContainerVariable.setAttribute("style", "position:fixed;top:4%;left:15%;transform: scale(0.75, 0.75);z-index: 0;visibility: visible;");

            document.getElementById("questionImageContainer").style.visibility = "hidden";
            document.getElementById("questionTextContainer1").style.visibility = "hidden";
            document.getElementById("InteractivityButton1").style.visibility = "hidden";

            document.getElementById("questionHeadingContainer").innerHTML = "Question 2";
            document.getElementById("questionTextContainer").innerHTML = "Change this to Role 3 Level 2 Question 2.";


            document.getElementById("questionTileText1").innerText = "Correct Answer 1";
            document.getElementById("questionTileText2").innerText = "Incorrect Answer 1";
            document.getElementById("questionTileText3").innerText = "Incorrect Answer 2";
            document.getElementById("questionTileText4").innerText = "Correct Answer 2";


            calculateTileOrder();
            reorderQuestionTiles();
            initialTimerStarted = false;

        }

    }

    if (currentLevelNo == 100) {
        currentLevelNo = 200;

        $('div#mainUI').hide();
        $('div#pageFooter').hide();
        $('div#selectPlayerNameUI').hide();
        $('div#selectPlayerRoleUI').show();
        $('div#preGameQuestionnaireUI').hide();
        $('div#levelUI').hide();
        $('div#postGameQuestionnaireUI').hide();
        $('div#leaderboardUI').hide();
        $('div#exitGameUI').hide();
        roleId = 100;



        if (Math.ceil(OverallSimZoneSkillsValue) == 100) {
            document.getElementById("simZoneCompletedBadge").style.opacity = "100%";
            document.getElementById("simZoneCompletedBadgeMini").style.opacity = "100%";
            playerRolesPlayed = playerRolesPlayed.concat("SimZone,");

        }


        if (LastPlayedRole == "Attacker") {
            document.getElementById("labelPlayerRoleAttacker").style.visibility = "hidden";
            document.getElementById("playerRoleavatar0").style.visibility = "hidden";
            document.getElementById("attackerRoleCompletedBadge").style.opacity = "100%";
            document.getElementById("attackerRoleCompletedBadgeMini").style.opacity = "100%";
            awardedBadgeId = 0;
            playerRolesPlayed = playerRolesPlayed.concat("Attacker,");
            openPlayerStatsZone("Attacker-Completed");

        }
        if (LastPlayedRole == "Defender") {
            document.getElementById("labelPlayerRoleDefender").style.visibility = "hidden";
            document.getElementById("playerRoleavatar1").style.visibility = "hidden";
            document.getElementById("defenderRoleCompletedBadge").style.opacity = "100%";
            document.getElementById("defenderRoleCompletedBadgeMini").style.opacity = "100%";
            awardedBadgeId = 1;
            playerRolesPlayed = playerRolesPlayed.concat("Defender,");
            openPlayerStatsZone("Defender-Completed");


        }
        if (LastPlayedRole == "User") {

            document.getElementById("labelPlayerRoleUser").style.visibility = "hidden";
            document.getElementById("playerRoleavatar2").style.visibility = "hidden";
            document.getElementById("userRoleCompletedBadge").style.opacity = "100%";
            document.getElementById("userRoleCompletedBadgeMini").style.opacity = "100%";
            awardedBadgeId = 2;
            playerRolesPlayed = playerRolesPlayed.concat("User,");
            openPlayerStatsZone("User-Completed");

        }



        if (rolesPlayed.includes('Attacker') && rolesPlayed.includes('Defender') && rolesPlayed.includes('User')) {

            showPostGameQuestionnaireUI();
        }


    }


}




function startTimer() {
    timerElement = document.getElementById('levelTimer');


    timeLimitInSeconds++;

}


function closeTimer() {
    clearInterval(timerInterval);
}


function selectAnswerTile(answerTileId) {



    switch (answerTileId) {
        case 1:

            questionTile1Selected = ~questionTile1Selected;
            if (questionTile1Selected) {
                if (playMusic == true) {
                    document.getElementById('buttonSelectSound').play();
                }

                if (tileLocations[0] == 1) {
                    document.getElementById("question1Tile").setAttribute("style", "position:fixed;left:1.5%;background-color: #41521F;border:0.4vw solid #0df27e;border-radius: 1vw;");
                } else if (tileLocations[0] == 2) {
                    document.getElementById("question1Tile").setAttribute("style", "position:fixed;left:26%;background-color: #6564DB;border:0.4vw solid #0df27e;border-radius: 1vw;");

                } else if (tileLocations[0] == 3) {
                    document.getElementById("question1Tile").setAttribute("style", "position:fixed;left:50.5%;background-color: #FF7F11;border:0.4vw solid #0df27e;border-radius: 1vw;");

                } else if (tileLocations[0] == 4) {
                    document.getElementById("question1Tile").setAttribute("style", "position:fixed;left:75%;background-color: #FF1B1C;border:0.4vw solid #0df27e;border-radius: 1vw;");

                }
            } else if (!questionTile1Selected) {
                if (playMusic == true) {
                    document.getElementById('buttonSelectSound').play();
                }

                if (tileLocations[0] == 1) {
                    document.getElementById("question1Tile").setAttribute("style", "position:fixed;left:1.5%;background-color: #41521F;border:0.4vw solid rgb(255, 255, 255);border-radius: 1vw;");
                } else if (tileLocations[0] == 2) {
                    document.getElementById("question1Tile").setAttribute("style", "position:fixed;left:26%;background-color: #6564DB;border:o.2vw solid rgb(255, 255, 255);border-radius: 1vw;");

                } else if (tileLocations[0] == 3) {
                    document.getElementById("question1Tile").setAttribute("style", "position:fixed;left:50.5%;background-color: #FF7F11;border:0.4vw solid rgb(255, 255, 255);border-radius: 1vw;");

                } else if (tileLocations[0] == 4) {
                    document.getElementById("question1Tile").setAttribute("style", "position:fixed;left:75%;background-color: #FF1B1C;border:0.4vw solid rgb(255, 255, 255);border-radius: 1vw;");

                }
            }



            break;
        case 2:

            questionTile2Selected = ~questionTile2Selected;
            if (questionTile2Selected) {
                if (playMusic == true) {
                    document.getElementById('buttonSelectSound').play();
                }
                if (tileLocations[1] == 1) {
                    document.getElementById("question2Tile").setAttribute("style", "position:fixed;left:1.5%;background-color: #41521F;border:0.4vw solid #0df27e;border-radius: 1vw;");
                } else if (tileLocations[1] == 2) {
                    document.getElementById("question2Tile").setAttribute("style", "position:fixed;left:26%;background-color: #6564DB;border:0.4vw solid #0df27e;border-radius: 1vw;");

                } else if (tileLocations[1] == 3) {
                    document.getElementById("question2Tile").setAttribute("style", "position:fixed;left:50.5%;background-color: #FF7F11;border:0.4vw solid #0df27e;border-radius: 1vw;");

                } else if (tileLocations[1] == 4) {
                    document.getElementById("question2Tile").setAttribute("style", "position:fixed;left:75%;background-color: #FF1B1C;border:0.4vw solid #0df27e;border-radius: 1vw;");

                }
            } else if (!questionTile2Selected) {
                if (playMusic == true) {
                    document.getElementById('buttonSelectSound').play();
                }
                if (tileLocations[1] == 1) {
                    document.getElementById("question2Tile").setAttribute("style", "position:fixed;left:1.5%;background-color: #41521F;border:0.4vw solid rgb(255, 255, 255);border-radius: 1vw;");
                } else if (tileLocations[1] == 2) {
                    document.getElementById("question2Tile").setAttribute("style", "position:fixed;left:26%;background-color: #6564DB;border:0.4vw solid rgb(255, 255, 255);border-radius: 1vw;");

                } else if (tileLocations[1] == 3) {
                    document.getElementById("question2Tile").setAttribute("style", "position:fixed;left:50.5%;background-color: #FF7F11;border:0.4vw solid rgb(255, 255, 255);border-radius: 1vw;");

                } else if (tileLocations[1] == 4) {
                    document.getElementById("question2Tile").setAttribute("style", "position:fixed;left:75%;background-color: #FF1B1C;border:0.4vw solid rgb(255, 255, 255);border-radius: 1vw;");

                }
            }


            break;
        case 3:

            questionTile3Selected = ~questionTile3Selected;
            if (questionTile3Selected) {
                if (playMusic == true) {
                    document.getElementById('buttonSelectSound').play();
                }
                if (tileLocations[2] == 1) {
                    document.getElementById("question3Tile").setAttribute("style", "position:fixed;left:1.5%;background-color: #41521F;border:0.4vw solid #0df27e;border-radius: 1vw;");
                } else if (tileLocations[2] == 2) {
                    document.getElementById("question3Tile").setAttribute("style", "position:fixed;left:26%;background-color: #6564DB;border:0.4vw solid #0df27e;border-radius: 1vw;");

                } else if (tileLocations[2] == 3) {
                    document.getElementById("question3Tile").setAttribute("style", "position:fixed;left:50.5%;background-color: #FF7F11;border:0.4vw solid #0df27e;border-radius: 1vw;");

                } else if (tileLocations[2] == 4) {
                    document.getElementById("question3Tile").setAttribute("style", "position:fixed;left:75%;background-color: #FF1B1C;border:0.4vw solid #0df27e;border-radius: 1vw;");

                }
            } else if (!questionTile3Selected) {
                if (playMusic == true) {
                    document.getElementById('buttonSelectSound').play();
                }
                if (tileLocations[2] == 1) {
                    document.getElementById("question3Tile").setAttribute("style", "position:fixed;left:1.5%;background-color: #41521F;border:0.4vw solid rgb(255, 255, 255);border-radius: 1vw;");
                } else if (tileLocations[2] == 2) {
                    document.getElementById("question3Tile").setAttribute("style", "position:fixed;left:26%;background-color: #6564DB;border:0.4vw solid rgb(255, 255, 255);border-radius: 1vw;");

                } else if (tileLocations[2] == 3) {
                    document.getElementById("question3Tile").setAttribute("style", "position:fixed;left:50.5%;background-color: #FF7F11;border:0.4vw solid rgb(255, 255, 255);border-radius: 1vw;");

                } else if (tileLocations[2] == 4) {
                    document.getElementById("question3Tile").setAttribute("style", "position:fixed;left:75%;background-color: #FF1B1C;border:0.4vw solid rgb(255, 255, 255);border-radius: 1vw;");

                }
            }


            break;

        case 4:

            questionTile4Selected = ~questionTile4Selected;
            if (questionTile4Selected) {
                if (playMusic == true) {
                    document.getElementById('buttonSelectSound').play();
                }
                if (tileLocations[3] == 1) {
                    document.getElementById("question4Tile").setAttribute("style", "position:fixed;left:1.5%;background-color: #41521F;border:0.4vw solid #0df27e;border-radius: 1vw;");
                } else if (tileLocations[3] == 2) {
                    document.getElementById("question4Tile").setAttribute("style", "position:fixed;left:26%;background-color: #6564DB;border:0.4vw solid #0df27e;border-radius: 1vw;");

                } else if (tileLocations[3] == 3) {
                    document.getElementById("question4Tile").setAttribute("style", "position:fixed;left:50.5%;background-color: #FF7F11;border:0.4vw solid #0df27e;border-radius: 1vw;");

                } else if (tileLocations[3] == 4) {
                    document.getElementById("question4Tile").setAttribute("style", "position:fixed;left:75%;background-color: #FF1B1C;border:0.4vw solid #0df27e;border-radius: 1vw;");

                }
            } else if (!questionTile4Selected) {
                if (playMusic == true) {
                    document.getElementById('buttonSelectSound').play();
                }
                if (tileLocations[3] == 1) {
                    document.getElementById("question4Tile").setAttribute("style", "position:fixed;left:1.5%;background-color: #41521F;border:0.4vw solid rgb(255, 255, 255);border-radius: 1vw;");
                } else if (tileLocations[3] == 2) {
                    document.getElementById("question4Tile").setAttribute("style", "position:fixed;left:26%;background-color: #6564DB;border:0.4vw solid rgb(255, 255, 255);border-radius: 1vw;");

                } else if (tileLocations[3] == 3) {
                    document.getElementById("question4Tile").setAttribute("style", "position:fixed;left:50.5%;background-color: #FF7F11;border:0.4vw solid rgb(255, 255, 255);border-radius: 1vw;");

                } else if (tileLocations[3] == 4) {
                    document.getElementById("question4Tile").setAttribute("style", "position:fixed;left:75%;background-color: #FF1B1C;border:0.4vw solid rgb(255, 255, 255);border-radius: 1vw;");

                }
            }


            break;


    }

}



function submitQuestionAnswers() {
    playerScore = document.getElementById('playerScoreInGame');
    if (playMusic == true) {
        document.getElementById('buttonSelectSound').play();
    }
    if (!questionTile1Selected && !questionTile2Selected && !questionTile3Selected && !questionTile4Selected) {
        if (playMusic == true) {
            document.getElementById('buttonErrorSound').play();
        }
        $('div#emptyAnswerErrorPopUp1').show();
    } else if (roleId == 0 && (currentLevelNo == 1 || currentLevelNo == 200)) {
        document.getElementById("ANSRTXT1").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX1+cgtuToqpGd9OOWJdTlHSX8aBVKiK2Pydo9H1RS/ueo3n+Ay7vWq8n", gameStatus).toString(CryptoJS.enc.Utf8) + String(tileLocations[1]) + ',' + String(tileLocations[3]) + '.';
        document.getElementById("ANSRTXT2").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX18ziWT+OzLNsFlMJ05/yMEC73NzTSDrTn2rpF4AqR8ln1M0nEfQU5yrPAYRykWVGcCv1xyRXJuVpAkrJHywTavL/hzRBvz/wsT/wFdev7/srDVBGRY0FE8OkC/fo5y5g7J3OB0No0ojOg==", gameStatus).toString(CryptoJS.enc.Utf8);
        document.getElementById("ANSRTXT3").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX19igt1Cwga9Blc7Rv0uKPmCOSViY28CJMoeMpdRQE5wblVBRtgPEKM9", gameStatus).toString(CryptoJS.enc.Utf8) + String(tileLocations[0]) + ',' + String(tileLocations[2]) + '.';
        document.getElementById("ANSRTXT4").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX1+o3msxsuvMeIBLxSe01y2S3bHqgV5Nly26MkyMxlpPU43kvXv20BTg/mnhmpegpo3VLxBo4FcdNY9sjBw0/23DmH3d42rp8pYiusc/aa7E27rRIANtbR+UWfbiULqPsybsUO/5uf/zSQ==", gameStatus).toString(CryptoJS.enc.Utf8);
        $('div#AnswerPopUp1').show();
        playerQuestionAnswersString = playerQuestionAnswersString.concat("!Role:0,Level:1");
        currentLevelNo = 2;

        if (questionTile2Selected) {
            playerScoreInLevel = playerScoreInLevel + 2;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:2");
            AttackerReflectedSkillsValue = AttackerReflectedSkillsValue + attackerRefOffset;
            OverallReflectedSkillsValue = OverallReflectedSkillsValue + overallRefOffset;
            correctAttackerAnswersList.push("R0L1Q1A2");
            if (!suggestedRoleList.includes("Attacker")) {
                suggestedRoleList.push("Attacker");
            }
        }

        if (questionTile4Selected) {
            playerScoreInLevel = playerScoreInLevel + 2;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:4");
            AttackerReflectedSkillsValue = AttackerReflectedSkillsValue + attackerRefOffset;
            OverallReflectedSkillsValue = OverallReflectedSkillsValue + overallRefOffset;
            correctAttackerAnswersList.push("R0L1Q1A4");
            if (!suggestedRoleList.includes("Attacker")) {
                suggestedRoleList.push("Attacker");
            }
        }

        if (questionTile1Selected) {
            playerScoreInLevel = playerScoreInLevel - 1;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:1");
            incorrectAttackerAnswersList.push("R0L1Q1A1");

            if (!suggestedRoleList.includes("Attacker")) {
                suggestedRoleList.push("Attacker");
            }
        }

        if (questionTile3Selected) {
            playerScoreInLevel = playerScoreInLevel - 1;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:3");
            AttackerReflectedSkillsValue = AttackerReflectedSkillsValue - 2;
            AttackerStoredSkillsValue = AttackerStoredSkillsValue - 2;
            OverallReflectedSkillsValue = OverallReflectedSkillsValue - 2;
            OverallStoredSkillsValue = OverallStoredSkillsValue - 2;


            if (OverallReflectedSkillsValue < 0) {
                OverallReflectedSkillsValue = 0;
            }

            if (OverallStoredSkillsValue < 0) {
                OverallStoredSkillsValue = 0;
            }

            if (AttackerReflectedSkillsValue < 0) {
                AttackerReflectedSkillsValue = 0;
            }

            if (AttackerStoredSkillsValue < 0) {
                AttackerStoredSkillsValue = 0;
            }
            incorrectAttackerAnswersList.push("R0L1Q1A3");
            if (!suggestedRoleList.includes("Attacker")) {
                suggestedRoleList.push("Attacker");
            }
        }

        if (questionTile1Selected && questionTile2Selected && questionTile3Selected && questionTile4Selected) {
            playerScoreInLevel = 0;
        }

        if (playerScoreInLevel < 0) {
            playerScoreInLevel = 0;
        }

        playerScore.textContent = Number(playerScore.textContent) + playerScoreInLevel;
        playerScoreInLevel = 0;
        document.getElementById("Ref-XSS-Skills-Value").innerText = Math.ceil(OverallReflectedSkillsValue);
        document.getElementById("video-progress-Ref-XSS").value = Math.ceil(OverallReflectedSkillsValue);
        SimZoneSkills1AddedtoBar = false;
        SimZoneSkills2AddedtoBar = false;
        levelsCompleted.push("R0L1");

    } else if (roleId == 0 && currentLevelNo == 2) {
        document.getElementById("ANSRTXT1").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX1+cgtuToqpGd9OOWJdTlHSX8aBVKiK2Pydo9H1RS/ueo3n+Ay7vWq8n", gameStatus).toString(CryptoJS.enc.Utf8) + String(tileLocations[0]) + ',' + String(tileLocations[1]) + ',' + String(tileLocations[2]) + '.';
        document.getElementById("ANSRTXT2").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX18ziWT+OzLNsFlMJ05/yMEC73NzTSDrTn2rpF4AqR8ln1M0nEfQU5yrPAYRykWVGcCv1xyRXJuVpAkrJHywTavL/hzRBvz/wsT/wFdev7/srDVBGRY0FE8OkC/fo5y5g7J3OB0No0ojOg==", gameStatus).toString(CryptoJS.enc.Utf8);
        document.getElementById("ANSRTXT3").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX1/TeXT8LOdwFfrAe5/vP7433ONc5pclzx6iwKrbrUWE93dqEIv88xjf", gameStatus).toString(CryptoJS.enc.Utf8) + String(tileLocations[3]) + '.';
        document.getElementById("ANSRTXT4").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX1+o3msxsuvMeIBLxSe01y2S3bHqgV5Nly26MkyMxlpPU43kvXv20BTg/mnhmpegpo3VLxBo4FcdNY9sjBw0/23DmH3d42rp8pYiusc/aa7E27rRIANtbR+UWfbiULqPsybsUO/5uf/zSQ==", gameStatus).toString(CryptoJS.enc.Utf8);
        $('div#AnswerPopUp1').show();
        playerQuestionAnswersString = playerQuestionAnswersString.concat("!Role:0,Level:2");
        currentLevelNo = 3;

        if (questionTile1Selected) {
            playerScoreInLevel = playerScoreInLevel + 2;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:1");
            AttackerReflectedSkillsValue = AttackerReflectedSkillsValue + attackerRefOffset;
            OverallReflectedSkillsValue = OverallReflectedSkillsValue + overallRefOffset;
            correctAttackerAnswersList.push("R0L2Q1A1");
            if (!suggestedRoleList.includes("Attacker")) {
                suggestedRoleList.push("Attacker");
            }
        }

        if (questionTile2Selected) {
            playerScoreInLevel = playerScoreInLevel + 2;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:2");
            AttackerReflectedSkillsValue = AttackerReflectedSkillsValue + attackerRefOffset;
            OverallReflectedSkillsValue = OverallReflectedSkillsValue + overallRefOffset;
            correctAttackerAnswersList.push("R0L2Q1A2");
            if (!suggestedRoleList.includes("Attacker")) {
                suggestedRoleList.push("Attacker");
            }
        }

        if (questionTile3Selected) {
            playerScoreInLevel = playerScoreInLevel + 2;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:3");
            AttackerReflectedSkillsValue = AttackerReflectedSkillsValue + attackerRefOffset;
            OverallReflectedSkillsValue = OverallReflectedSkillsValue + overallRefOffset;
            correctAttackerAnswersList.push("R0L2Q1A3");
            if (!suggestedRoleList.includes("Attacker")) {
                suggestedRoleList.push("Attacker");
            }
        }

        if (questionTile4Selected) {
            playerScoreInLevel = playerScoreInLevel - 1;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:4");
            incorrectAttackerAnswersList.push("R0L2Q1A4");


            AttackerReflectedSkillsValue = AttackerReflectedSkillsValue - 2;

            if (AttackerReflectedSkillsValue < 0) {
                AttackerReflectedSkillsValue = 0;
            }


            OverallReflectedSkillsValue = OverallReflectedSkillsValue - 2;



            if (OverallReflectedSkillsValue < 0) {
                OverallReflectedSkillsValue = 0;
            }


            if (!suggestedRoleList.includes("Attacker")) {
                suggestedRoleList.push("Attacker");
            }
        }

        if (questionTile1Selected && questionTile2Selected && questionTile3Selected && questionTile4Selected) {
            playerScoreInLevel = 0;
        }

        if (playerScoreInLevel < 0) {
            playerScoreInLevel = 0;
        }
        playerScore.textContent = Number(playerScore.textContent) + playerScoreInLevel;
        playerScoreInLevel = 0;
        document.getElementById("Ref-XSS-Skills-Value").innerText = Math.ceil(OverallReflectedSkillsValue);
        document.getElementById("video-progress-Ref-XSS").value = Math.ceil(OverallReflectedSkillsValue);
        SimZoneSkills1AddedtoBar = false;
        SimZoneSkills2AddedtoBar = false;
        levelsCompleted.push("R0L2");
    } else if (roleId == 0 && currentLevelNo == 3) {
        document.getElementById("ANSRTXT1").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX19UnSloyBIy/ca/IaVg784//TBeBI4a9D4kC2IK0wTAcXAYWaixSmCp", gameStatus).toString(CryptoJS.enc.Utf8) + String(tileLocations[0]) + ',' + String(tileLocations[1]) + ',' + String(tileLocations[2]) + ',' + String(tileLocations[3]) + '.';
        document.getElementById("ANSRTXT2").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX18ziWT+OzLNsFlMJ05/yMEC73NzTSDrTn2rpF4AqR8ln1M0nEfQU5yrPAYRykWVGcCv1xyRXJuVpAkrJHywTavL/hzRBvz/wsT/wFdev7/srDVBGRY0FE8OkC/fo5y5g7J3OB0No0ojOg==", gameStatus).toString(CryptoJS.enc.Utf8);
        document.getElementById("ANSRTXT3").style.color = "white";
        document.getElementById("ANSRTXT3").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX18ziWT+OzLNsFlMJ05/yMEC73NzTSDrTn2rpF4AqR8ln1M0nEfQU5yrPAYRykWVGcCv1xyRXJuVpAkrJHywTavL/hzRBvz/wsT/wFdev7/srDVBGRY0FE8OkC/fo5y5g7J3OB0No0ojOg==", gameStatus).toString(CryptoJS.enc.Utf8);
        document.getElementById("ANSRTXT4").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX18ziWT+OzLNsFlMJ05/yMEC73NzTSDrTn2rpF4AqR8ln1M0nEfQU5yrPAYRykWVGcCv1xyRXJuVpAkrJHywTavL/hzRBvz/wsT/wFdev7/srDVBGRY0FE8OkC/fo5y5g7J3OB0No0ojOg==", gameStatus).toString(CryptoJS.enc.Utf8);
        $('div#AnswerPopUp1').show();
        playerQuestionAnswersString = playerQuestionAnswersString.concat("!Role:0,Level:3");
        currentLevelNo = 4;

        if (questionTile1Selected) {
            playerScoreInLevel = playerScoreInLevel + 2;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:1");
            AttackerReflectedSkillsValue = AttackerReflectedSkillsValue + attackerRefOffset;
            OverallReflectedSkillsValue = OverallReflectedSkillsValue + overallRefOffset;
            correctAttackerAnswersList.push("R0L3Q1A1");
            if (!suggestedRoleList.includes("Attacker")) {
                suggestedRoleList.push("Attacker");
            }
        }

        if (questionTile2Selected) {
            playerScoreInLevel = playerScoreInLevel + 2;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:2");
            AttackerReflectedSkillsValue = AttackerReflectedSkillsValue + attackerRefOffset;
            OverallReflectedSkillsValue = OverallReflectedSkillsValue + overallRefOffset;
            correctAttackerAnswersList.push("R0L3Q1A2");
            if (!suggestedRoleList.includes("Attacker")) {
                suggestedRoleList.push("Attacker");
            }
        }

        if (questionTile3Selected) {
            playerScoreInLevel = playerScoreInLevel + 2;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:3");
            AttackerReflectedSkillsValue = AttackerReflectedSkillsValue + attackerRefOffset;
            OverallReflectedSkillsValue = OverallReflectedSkillsValue + overallRefOffset;
            correctAttackerAnswersList.push("R0L3Q1A3");
            if (!suggestedRoleList.includes("Attacker")) {
                suggestedRoleList.push("Attacker");
            }
        }

        if (questionTile4Selected) {
            playerScoreInLevel = playerScoreInLevel + 2;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:4");
            AttackerReflectedSkillsValue = AttackerReflectedSkillsValue + attackerRefOffset;
            OverallReflectedSkillsValue = OverallReflectedSkillsValue + overallRefOffset;
            correctAttackerAnswersList.push("R0L3Q1A4");
            if (!suggestedRoleList.includes("Attacker")) {
                suggestedRoleList.push("Attacker");
            }
        }

        if (playerScoreInLevel < 0) {
            playerScoreInLevel = 0;
        }

        playerScore.textContent = Number(playerScore.textContent) + playerScoreInLevel;
        playerScoreInLevel = 0;
        document.getElementById("Ref-XSS-Skills-Value").innerText = Math.ceil(OverallReflectedSkillsValue);
        document.getElementById("video-progress-Ref-XSS").value = Math.ceil(OverallReflectedSkillsValue);
        SimZoneSkills1AddedtoBar = false;
        SimZoneSkills2AddedtoBar = false;
        levelsCompleted.push("R0L3");
    } else if (roleId == 0 && currentLevelNo == 4) {
        document.getElementById("ANSRTXT3").style.color = "red";
        document.getElementById("ANSRTXT1").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX1+fpUqYbeG5w6T4H3RpjvOcQihrvPvYlfv8OycSB3B6eNjrExoxadpp", gameStatus).toString(CryptoJS.enc.Utf8) + String(tileLocations[2]) + ',' + String(tileLocations[3]) + '.';
        document.getElementById("ANSRTXT2").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX18ziWT+OzLNsFlMJ05/yMEC73NzTSDrTn2rpF4AqR8ln1M0nEfQU5yrPAYRykWVGcCv1xyRXJuVpAkrJHywTavL/hzRBvz/wsT/wFdev7/srDVBGRY0FE8OkC/fo5y5g7J3OB0No0ojOg==", gameStatus).toString(CryptoJS.enc.Utf8);
        document.getElementById("ANSRTXT3").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX19S0ioCtk4hNGgjaXNeOB6l80OORdIr+grLaw9gl+6zDW2b6Svx1/9q", gameStatus).toString(CryptoJS.enc.Utf8) + String(tileLocations[0]) + ',' + String(tileLocations[1]) + '.';
        document.getElementById("ANSRTXT4").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX1+o3msxsuvMeIBLxSe01y2S3bHqgV5Nly26MkyMxlpPU43kvXv20BTg/mnhmpegpo3VLxBo4FcdNY9sjBw0/23DmH3d42rp8pYiusc/aa7E27rRIANtbR+UWfbiULqPsybsUO/5uf/zSQ==", gameStatus).toString(CryptoJS.enc.Utf8);
        $('div#AnswerPopUp1').show();
        playerQuestionAnswersString = playerQuestionAnswersString.concat("!Role:0,Level:4");
        currentLevelNo = 5;

        if (questionTile3Selected) {
            playerScoreInLevel = playerScoreInLevel + 2;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:3");
            AttackerStoredSkillsValue = AttackerStoredSkillsValue + attackerStoredOffset;
            OverallStoredSkillsValue = OverallStoredSkillsValue + overallStoredOffset;
            correctAttackerAnswersList.push("R0L4Q1A3");
            if (!suggestedRoleList.includes("Attacker")) {
                suggestedRoleList.push("Attacker");
            }
        }

        if (questionTile4Selected) {
            playerScoreInLevel = playerScoreInLevel + 2;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:4");
            AttackerStoredSkillsValue = AttackerStoredSkillsValue + attackerStoredOffset;
            OverallStoredSkillsValue = OverallStoredSkillsValue + overallStoredOffset;
            correctAttackerAnswersList.push("R0L4Q1A4");
            if (!suggestedRoleList.includes("Attacker")) {
                suggestedRoleList.push("Attacker");
            }
        }

        if (questionTile1Selected) {
            playerScoreInLevel = playerScoreInLevel - 1;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:1");
            incorrectAttackerAnswersList.push("R0L4Q1A1");
            if (!suggestedRoleList.includes("Attacker")) {
                suggestedRoleList.push("Attacker");
            }
        }

        if (questionTile2Selected) {
            playerScoreInLevel = playerScoreInLevel - 1;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:2");
            incorrectAttackerAnswersList.push("R0L4Q1A2");

            AttackerReflectedSkillsValue = AttackerReflectedSkillsValue - 2;
            AttackerStoredSkillsValue = AttackerStoredSkillsValue - 2;
            if (AttackerReflectedSkillsValue < 0) {
                AttackerReflectedSkillsValue = 0;
            }

            if (AttackerStoredSkillsValue < 0) {
                AttackerStoredSkillsValue = 0;
            }


            OverallReflectedSkillsValue = OverallReflectedSkillsValue - 2;
            OverallStoredSkillsValue = OverallStoredSkillsValue - 2;


            if (OverallReflectedSkillsValue < 0) {
                OverallReflectedSkillsValue = 0;
            }

            if (OverallStoredSkillsValue < 0) {
                OverallStoredSkillsValue = 0;
            }
            if (!suggestedRoleList.includes("Attacker")) {
                suggestedRoleList.push("Attacker");
            }
        }

        if (questionTile1Selected && questionTile2Selected && questionTile3Selected && questionTile4Selected) {
            playerScoreInLevel = 0;
        }

        if (playerScoreInLevel < 0) {
            playerScoreInLevel = 0;
        }

        playerScore.textContent = Number(playerScore.textContent) + playerScoreInLevel;
        playerScoreInLevel = 0;

        document.getElementById("Stored-XSS-Skills-Value").innerText = Math.ceil(OverallStoredSkillsValue);
        document.getElementById("video-progress-Stored-XSS").value = Math.ceil(OverallStoredSkillsValue);
        SimZoneSkills1AddedtoBar = false;
        SimZoneSkills2AddedtoBar = false;
        levelsCompleted.push("R0L4");
    } else if (roleId == 0 && currentLevelNo == 5) {
        document.getElementById("ANSRTXT3").style.color = "red";
        document.getElementById("ANSRTXT1").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX1+W6FvJ0R6Z26ifHtG8A5XvRXh1QX0Ot4NxmSVWoW2U14LGeL480sG0", gameStatus).toString(CryptoJS.enc.Utf8) + String(tileLocations[0]) + ',' + String(tileLocations[1]) + ',' + String(tileLocations[2]) + '.';
        document.getElementById("ANSRTXT2").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX18ziWT+OzLNsFlMJ05/yMEC73NzTSDrTn2rpF4AqR8ln1M0nEfQU5yrPAYRykWVGcCv1xyRXJuVpAkrJHywTavL/hzRBvz/wsT/wFdev7/srDVBGRY0FE8OkC/fo5y5g7J3OB0No0ojOg==", gameStatus).toString(CryptoJS.enc.Utf8);
        document.getElementById("ANSRTXT3").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX19EoQT/ul9OKLsvUjj4NUW1PalI7TW1af9hbQ+MRxzT+TiMxx7Xcnej", gameStatus).toString(CryptoJS.enc.Utf8) + String(tileLocations[3]) + '.';
        document.getElementById("ANSRTXT4").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX1+o3msxsuvMeIBLxSe01y2S3bHqgV5Nly26MkyMxlpPU43kvXv20BTg/mnhmpegpo3VLxBo4FcdNY9sjBw0/23DmH3d42rp8pYiusc/aa7E27rRIANtbR+UWfbiULqPsybsUO/5uf/zSQ==", gameStatus).toString(CryptoJS.enc.Utf8);
        $('div#AnswerPopUp1').show();
        playerQuestionAnswersString = playerQuestionAnswersString.concat("!Role:0,Level:5");
        currentLevelNo = 6;

        if (questionTile1Selected) {
            playerScoreInLevel = playerScoreInLevel + 2;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:1");
            AttackerStoredSkillsValue = AttackerStoredSkillsValue + attackerStoredOffset;
            OverallStoredSkillsValue = OverallStoredSkillsValue + overallStoredOffset;
            correctAttackerAnswersList.push("R0L5Q1A1");
            if (!suggestedRoleList.includes("Attacker")) {
                suggestedRoleList.push("Attacker");
            }
        }

        if (questionTile2Selected) {
            playerScoreInLevel = playerScoreInLevel + 2;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:2");
            AttackerStoredSkillsValue = AttackerStoredSkillsValue + attackerStoredOffset;
            OverallStoredSkillsValue = OverallStoredSkillsValue + overallStoredOffset;
            correctAttackerAnswersList.push("R0L5Q1A2");
            if (!suggestedRoleList.includes("Attacker")) {
                suggestedRoleList.push("Attacker");
            }
        }


        if (questionTile3Selected) {
            playerScoreInLevel = playerScoreInLevel + 2;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:3");
            AttackerStoredSkillsValue = AttackerStoredSkillsValue + attackerStoredOffset;
            OverallStoredSkillsValue = OverallStoredSkillsValue + overallStoredOffset;
            correctAttackerAnswersList.push("R0L5Q1A3");
            if (!suggestedRoleList.includes("Attacker")) {
                suggestedRoleList.push("Attacker");
            }
        }

        if (questionTile4Selected) {
            playerScoreInLevel = playerScoreInLevel - 1;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:4");
            incorrectAttackerAnswersList.push("R0L5Q1A4");


            AttackerStoredSkillsValue = AttackerStoredSkillsValue - 2;


            if (AttackerStoredSkillsValue < 0) {
                AttackerStoredSkillsValue = 0;
            }


            OverallStoredSkillsValue = OverallStoredSkillsValue - 2;



            if (OverallStoredSkillsValue < 0) {
                OverallStoredSkillsValue = 0;
            }



            if (!suggestedRoleList.includes("Attacker")) {
                suggestedRoleList.push("Attacker");
            }
        }

        if (questionTile1Selected && questionTile2Selected && questionTile3Selected && questionTile4Selected) {
            playerScoreInLevel = 0;
        }

        if (playerScoreInLevel < 0) {
            playerScoreInLevel = 0;
        }

        playerScore.textContent = Number(playerScore.textContent) + playerScoreInLevel;
        playerScoreInLevel = 0;
        document.getElementById("Stored-XSS-Skills-Value").innerText = Math.ceil(OverallStoredSkillsValue);
        document.getElementById("video-progress-Stored-XSS").value = Math.ceil(OverallStoredSkillsValue);
        SimZoneSkills1AddedtoBar = false;
        SimZoneSkills2AddedtoBar = false;
        levelsCompleted.push("R0L5");
    } else if (roleId == 0 && currentLevelNo == 6) {
        document.getElementById("ANSRTXT3").style.color = "red";
        document.getElementById("ANSRTXT1").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX1+aIjvGK9TH20akw6F1vgLyip+Ifd5Ib3ayQjEs+ivJ1sBAns2cTjW3", gameStatus).toString(CryptoJS.enc.Utf8) + String(tileLocations[0]) + ',' + String(tileLocations[2]) + '.';
        document.getElementById("ANSRTXT2").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX18ziWT+OzLNsFlMJ05/yMEC73NzTSDrTn2rpF4AqR8ln1M0nEfQU5yrPAYRykWVGcCv1xyRXJuVpAkrJHywTavL/hzRBvz/wsT/wFdev7/srDVBGRY0FE8OkC/fo5y5g7J3OB0No0ojOg==", gameStatus).toString(CryptoJS.enc.Utf8);
        document.getElementById("ANSRTXT3").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX182FXdooJS7fmnet83oyMGoSfO4qY+NhuEde+5nFGv9aNe8AB6kPDun", gameStatus).toString(CryptoJS.enc.Utf8) + String(tileLocations[1]) + ',' + String(tileLocations[3]) + '.';
        document.getElementById("ANSRTXT4").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX1+o3msxsuvMeIBLxSe01y2S3bHqgV5Nly26MkyMxlpPU43kvXv20BTg/mnhmpegpo3VLxBo4FcdNY9sjBw0/23DmH3d42rp8pYiusc/aa7E27rRIANtbR+UWfbiULqPsybsUO/5uf/zSQ==", gameStatus).toString(CryptoJS.enc.Utf8);
        $('div#AnswerPopUp1').show();
        playerQuestionAnswersString = playerQuestionAnswersString.concat("!Role:0,Level:6");
        currentLevelNo = 7;

        if (questionTile1Selected) {
            playerScoreInLevel = playerScoreInLevel + 2;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:1");
            AttackerReflectedSkillsValue = AttackerReflectedSkillsValue + attackerRefOffset;
            OverallReflectedSkillsValue = OverallReflectedSkillsValue + overallRefOffset;

            correctAttackerAnswersList.push("R0L6Q1A1");
            if (!suggestedRoleList.includes("Attacker")) {
                suggestedRoleList.push("Attacker");
            }
        }

        if (questionTile3Selected) {
            playerScoreInLevel = playerScoreInLevel + 2;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:3");
            AttackerStoredSkillsValue = AttackerStoredSkillsValue + attackerStoredOffset;
            OverallStoredSkillsValue = OverallStoredSkillsValue + overallStoredOffset;

            correctAttackerAnswersList.push("R0L6Q1A3");
            if (!suggestedRoleList.includes("Attacker")) {
                suggestedRoleList.push("Attacker");
            }
        }


        if (questionTile2Selected) {
            playerScoreInLevel = playerScoreInLevel - 1;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:2");
            incorrectAttackerAnswersList.push("R0L6Q1A2");


            AttackerStoredSkillsValue = AttackerStoredSkillsValue - 2;


            if (AttackerStoredSkillsValue < 0) {
                AttackerStoredSkillsValue = 0;
            }



            OverallStoredSkillsValue = OverallStoredSkillsValue - 2;




            if (OverallStoredSkillsValue < 0) {
                OverallStoredSkillsValue = 0;
            }



            if (!suggestedRoleList.includes("Attacker")) {
                suggestedRoleList.push("Attacker");
            }
        }

        if (questionTile4Selected) {
            playerScoreInLevel = playerScoreInLevel - 1;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:4");
            incorrectAttackerAnswersList.push("R0L6Q1A4");
            if (!suggestedRoleList.includes("Attacker")) {
                suggestedRoleList.push("Attacker");
            }
        }

        if (questionTile1Selected && questionTile2Selected && questionTile3Selected && questionTile4Selected) {
            playerScoreInLevel = 0;
        }

        if (playerScoreInLevel < 0) {
            playerScoreInLevel = 0;
        }

        document.getElementById("Ref-XSS-Skills-Value").innerText = Math.ceil(OverallReflectedSkillsValue);
        document.getElementById("video-progress-Ref-XSS").value = Math.ceil(OverallReflectedSkillsValue);
        document.getElementById("Stored-XSS-Skills-Value").innerText = Math.ceil(OverallStoredSkillsValue);
        document.getElementById("video-progress-Stored-XSS").value = Math.ceil(OverallStoredSkillsValue);
        SimZoneSkills1AddedtoBar = false;
        SimZoneSkills2AddedtoBar = false;
        levelsCompleted.push("R0L6");

        playerScore.textContent = Number(playerScore.textContent) + playerScoreInLevel;
        playerScoreInLevel = 0;



    } else if (roleId == 0 && currentLevelNo == 7) {
        document.getElementById("ANSRTXT3").style.color = "red";
        document.getElementById("ANSRTXT1").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX18+ZZgzWzplVCvItVOITRQrSWj0H0qvCc0WZJKzVVYEFqbPlLmMQYzR", gameStatus).toString(CryptoJS.enc.Utf8) + String(tileLocations[0]) + ',' + String(tileLocations[1]) + ',' + String(tileLocations[2]) + '.';
        document.getElementById("ANSRTXT2").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX18ziWT+OzLNsFlMJ05/yMEC73NzTSDrTn2rpF4AqR8ln1M0nEfQU5yrPAYRykWVGcCv1xyRXJuVpAkrJHywTavL/hzRBvz/wsT/wFdev7/srDVBGRY0FE8OkC/fo5y5g7J3OB0No0ojOg==", gameStatus).toString(CryptoJS.enc.Utf8);
        document.getElementById("ANSRTXT3").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX19HL7FFXb8NjukX+mFFxRz/6ADhqBJFfguqvQKviwnUuACQSGNKfctk", gameStatus).toString(CryptoJS.enc.Utf8) + String(tileLocations[3]) + '.';
        document.getElementById("ANSRTXT4").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX1+o3msxsuvMeIBLxSe01y2S3bHqgV5Nly26MkyMxlpPU43kvXv20BTg/mnhmpegpo3VLxBo4FcdNY9sjBw0/23DmH3d42rp8pYiusc/aa7E27rRIANtbR+UWfbiULqPsybsUO/5uf/zSQ==", gameStatus).toString(CryptoJS.enc.Utf8);
        $('div#AnswerPopUp1').show();
        playerQuestionAnswersString = playerQuestionAnswersString.concat("!Role:0,Level:7");
        currentLevelNo = 8;

        if (questionTile1Selected) {
            playerScoreInLevel = playerScoreInLevel + 2;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:1");
            AttackerDOMBasedSkillsValue = AttackerDOMBasedSkillsValue + attackerDOMOffset;
            OverallDOMBasedSkillsValue = OverallDOMBasedSkillsValue + overallDOMOffset;

            correctAttackerAnswersList.push("R0L7Q1A1");
            if (!suggestedRoleList.includes("Attacker")) {
                suggestedRoleList.push("Attacker");
            }
        }

        if (questionTile2Selected) {
            playerScoreInLevel = playerScoreInLevel + 2;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:2");
            AttackerDOMBasedSkillsValue = AttackerDOMBasedSkillsValue + attackerDOMOffset;
            OverallDOMBasedSkillsValue = OverallDOMBasedSkillsValue + overallDOMOffset;

            correctAttackerAnswersList.push("R0L7Q1A2");
            if (!suggestedRoleList.includes("Attacker")) {
                suggestedRoleList.push("Attacker");
            }
        }


        if (questionTile3Selected) {
            playerScoreInLevel = playerScoreInLevel + 2;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:3");
            AttackerDOMBasedSkillsValue = AttackerDOMBasedSkillsValue + attackerDOMOffset;
            OverallDOMBasedSkillsValue = OverallDOMBasedSkillsValue + overallDOMOffset;

            correctAttackerAnswersList.push("R0L7Q1A3");
            if (!suggestedRoleList.includes("Attacker")) {
                suggestedRoleList.push("Attacker");
            }
        }

        if (questionTile4Selected) {
            playerScoreInLevel = playerScoreInLevel - 1;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:4");
            incorrectAttackerAnswersList.push("R0L7Q1A4");

            AttackerReflectedSkillsValue = AttackerReflectedSkillsValue - 2;

            if (AttackerReflectedSkillsValue < 0) {
                AttackerReflectedSkillsValue = 0;
            }

            OverallReflectedSkillsValue = OverallReflectedSkillsValue - 2;


            if (OverallReflectedSkillsValue < 0) {
                OverallReflectedSkillsValue = 0;
            }


            if (!suggestedRoleList.includes("Attacker")) {
                suggestedRoleList.push("Attacker");
            }
        }

        if (questionTile1Selected && questionTile2Selected && questionTile3Selected && questionTile4Selected) {
            playerScoreInLevel = 0;
        }

        if (playerScoreInLevel < 0) {
            playerScoreInLevel = 0;

        }

        document.getElementById("DOM-based-XSS-Skills-Value").innerText = Math.ceil(OverallDOMBasedSkillsValue);
        document.getElementById("video-progress-DOM-based-XSS").value = Math.ceil(OverallDOMBasedSkillsValue);

        SimZoneSkills1AddedtoBar = false;
        SimZoneSkills2AddedtoBar = false;

        playerScore.textContent = Number(playerScore.textContent) + playerScoreInLevel;
        playerScoreInLevel = 0;
        levelsCompleted.push("R0L7");


    } else if (roleId == 0 && currentLevelNo == 8) {

        document.getElementById("ANSRTXT1").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX19ovw4Ubk6uZ/3eLzZqoHXhmxdGQ/m+KPsdnePrwnoWmjA7+JH20uK/", gameStatus).toString(CryptoJS.enc.Utf8) + String(tileLocations[0]) + ',' + String(tileLocations[1]) + ',' + String(tileLocations[3]) + '.';
        document.getElementById("ANSRTXT2").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX18ziWT+OzLNsFlMJ05/yMEC73NzTSDrTn2rpF4AqR8ln1M0nEfQU5yrPAYRykWVGcCv1xyRXJuVpAkrJHywTavL/hzRBvz/wsT/wFdev7/srDVBGRY0FE8OkC/fo5y5g7J3OB0No0ojOg==", gameStatus).toString(CryptoJS.enc.Utf8);
        document.getElementById("ANSRTXT3").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX1/Kl+/DPXdCGB26LCXrwvYLpjLJZ3Qy76Kdr2LRFxDKPAQ1ow0PIcfV", gameStatus).toString(CryptoJS.enc.Utf8) + String(tileLocations[2]) + '.';
        document.getElementById("ANSRTXT4").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX1+o3msxsuvMeIBLxSe01y2S3bHqgV5Nly26MkyMxlpPU43kvXv20BTg/mnhmpegpo3VLxBo4FcdNY9sjBw0/23DmH3d42rp8pYiusc/aa7E27rRIANtbR+UWfbiULqPsybsUO/5uf/zSQ==", gameStatus).toString(CryptoJS.enc.Utf8);
        $('div#AnswerPopUp1').show();
        playerQuestionAnswersString = playerQuestionAnswersString.concat("!Role:0,Level:8");
        currentLevelNo = 9;

        if (questionTile1Selected) {
            playerScoreInLevel = playerScoreInLevel + 2;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:1");
            AttackerDOMBasedSkillsValue = AttackerDOMBasedSkillsValue + attackerDOMOffset;
            OverallDOMBasedSkillsValue = OverallDOMBasedSkillsValue + overallDOMOffset;

            correctAttackerAnswersList.push("R0L8Q1A1");
            if (!suggestedRoleList.includes("Attacker")) {
                suggestedRoleList.push("Attacker");
            }
        }

        if (questionTile3Selected) {
            playerScoreInLevel = playerScoreInLevel - 1;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:3");
            incorrectAttackerAnswersList.push("R0L8Q1A3");

            AttackerDOMBasedSkillsValue = AttackerDOMBasedSkillsValue - 2;

            if (AttackerDOMBasedSkillsValue < 0) {
                AttackerDOMBasedSkillsValue = 0;
            }


            OverallDOMBasedSkillsValue = OverallDOMBasedSkillsValue - 2;




            if (OverallDOMBasedSkillsValue < 0) {
                OverallDOMBasedSkillsValue = 0;
            }

            if (!suggestedRoleList.includes("Attacker")) {
                suggestedRoleList.push("Attacker");
            }
        }


        if (questionTile2Selected) {
            playerScoreInLevel = playerScoreInLevel + 2;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:2");
            AttackerDOMBasedSkillsValue = AttackerDOMBasedSkillsValue + attackerDOMOffset;
            OverallDOMBasedSkillsValue = OverallDOMBasedSkillsValue + overallDOMOffset;

            correctAttackerAnswersList.push("R0L8Q1A2");
            if (!suggestedRoleList.includes("Attacker")) {
                suggestedRoleList.push("Attacker");
            }
        }

        if (questionTile4Selected) {
            playerScoreInLevel = playerScoreInLevel + 2;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:4");
            AttackerDOMBasedSkillsValue = AttackerDOMBasedSkillsValue + attackerDOMOffset;
            OverallDOMBasedSkillsValue = OverallDOMBasedSkillsValue + overallDOMOffset;

            correctAttackerAnswersList.push("R0L8Q1A4");
            if (!suggestedRoleList.includes("Attacker")) {
                suggestedRoleList.push("Attacker");
            }
        }



        if (playerScoreInLevel < 0) {
            playerScoreInLevel = 0;

        }

        document.getElementById("DOM-based-XSS-Skills-Value").innerText = Math.ceil(OverallDOMBasedSkillsValue);
        document.getElementById("video-progress-DOM-based-XSS").value = Math.ceil(OverallDOMBasedSkillsValue);
        SimZoneSkills1AddedtoBar = false;
        SimZoneSkills2AddedtoBar = false;

        playerScore.textContent = Number(playerScore.textContent) + playerScoreInLevel;
        playerScoreInLevel = 0;

        levelsCompleted.push("R0L8");

    } else if (roleId == 0 && currentLevelNo == 9) {
        document.getElementById("ANSRTXT3").style.color = "red";
        document.getElementById("ANSRTXT1").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX184IjWMbDq+3Yhq/EA/d+0DpV6OXCu9aZI8HNXgSW/t638NzyCM5w4R", gameStatus).toString(CryptoJS.enc.Utf8) + String(tileLocations[2]) + ',' + String(tileLocations[3]) + '.';
        document.getElementById("ANSRTXT2").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX18ziWT+OzLNsFlMJ05/yMEC73NzTSDrTn2rpF4AqR8ln1M0nEfQU5yrPAYRykWVGcCv1xyRXJuVpAkrJHywTavL/hzRBvz/wsT/wFdev7/srDVBGRY0FE8OkC/fo5y5g7J3OB0No0ojOg==", gameStatus).toString(CryptoJS.enc.Utf8);
        document.getElementById("ANSRTXT3").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX1+a9X98Tcz+7xTtyHisxRobN+y8NkrqyfbkdySR3ZOaUN4Je9CTRAlm", gameStatus).toString(CryptoJS.enc.Utf8) + String(tileLocations[0]) + ',' + String(tileLocations[1]) + '.';
        document.getElementById("ANSRTXT4").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX1+o3msxsuvMeIBLxSe01y2S3bHqgV5Nly26MkyMxlpPU43kvXv20BTg/mnhmpegpo3VLxBo4FcdNY9sjBw0/23DmH3d42rp8pYiusc/aa7E27rRIANtbR+UWfbiULqPsybsUO/5uf/zSQ==", gameStatus).toString(CryptoJS.enc.Utf8);
        $('div#AnswerPopUp1').show();
        playerQuestionAnswersString = playerQuestionAnswersString.concat("!Role:0,Level:9");
        currentLevelNo = 100;
        clearInterval(timerInterval);

        if (questionTile1Selected) {
            playerScoreInLevel = playerScoreInLevel - 1;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:1");
            incorrectAttackerAnswersList.push("R0L9Q1A1");

            AttackerDOMBasedSkillsValue = AttackerDOMBasedSkillsValue - 2;

            if (AttackerDOMBasedSkillsValue < 0) {
                AttackerDOMBasedSkillsValue = 0;
            }



            OverallDOMBasedSkillsValue = OverallDOMBasedSkillsValue - 2;




            if (OverallDOMBasedSkillsValue < 0) {
                OverallDOMBasedSkillsValue = 0;
            }
            if (!suggestedRoleList.includes("Attacker")) {
                suggestedRoleList.push("Attacker");
            }

        }

        if (questionTile3Selected) {
            playerScoreInLevel = playerScoreInLevel + 2;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:3");
            AttackerDOMBasedSkillsValue = AttackerDOMBasedSkillsValue + attackerDOMOffset;
            OverallDOMBasedSkillsValue = OverallDOMBasedSkillsValue + overallDOMOffset;


            correctAttackerAnswersList.push("R0L9Q1A3");
            if (!suggestedRoleList.includes("Attacker")) {
                suggestedRoleList.push("Attacker");
            }
        }


        if (questionTile2Selected) {
            playerScoreInLevel = playerScoreInLevel - 1;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:2");
            incorrectAttackerAnswersList.push("R0L9Q1A2");

            AttackerStoredSkillsValue = AttackerStoredSkillsValue - 2;

            if (AttackerStoredSkillsValue < 0) {
                AttackerStoredSkillsValue = 0;
            }



            OverallStoredSkillsValue = OverallStoredSkillsValue - 2;




            if (OverallStoredSkillsValue < 0) {
                OverallStoredSkillsValue = 0;
            }



            if (!suggestedRoleList.includes("Attacker")) {
                suggestedRoleList.push("Attacker");
            }
        }

        if (questionTile4Selected) {
            playerScoreInLevel = playerScoreInLevel + 2;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:4");
            AttackerDOMBasedSkillsValue = AttackerDOMBasedSkillsValue + attackerDOMOffset;
            AttackerReflectedSkillsValue = AttackerReflectedSkillsValue + attackerRefOffset;
            AttackerStoredSkillsValue = AttackerStoredSkillsValue + attackerStoredOffset;
            OverallDOMBasedSkillsValue = OverallDOMBasedSkillsValue + overallDOMOffset;
            OverallReflectedSkillsValue = OverallReflectedSkillsValue + overallRefOffset;
            OverallStoredSkillsValue = OverallStoredSkillsValue + overallStoredOffset;

            correctAttackerAnswersList.push("R0L9Q1A4");
            if (!suggestedRoleList.includes("Attacker")) {
                suggestedRoleList.push("Attacker");
            }
        }

        if (questionTile1Selected && questionTile2Selected && questionTile3Selected && questionTile4Selected) {
            playerScoreInLevel = 0;
        }

        if (playerScoreInLevel < 0) {
            playerScoreInLevel = 0;

        }

        document.getElementById("Ref-XSS-Skills-Value").innerText = Math.ceil(OverallReflectedSkillsValue);
        document.getElementById("video-progress-Ref-XSS").value = Math.ceil(OverallReflectedSkillsValue);
        document.getElementById("Stored-XSS-Skills-Value").innerText = Math.ceil(OverallStoredSkillsValue);
        document.getElementById("video-progress-Stored-XSS").value = Math.ceil(OverallStoredSkillsValue);
        document.getElementById("DOM-based-XSS-Skills-Value").innerText = Math.ceil(OverallDOMBasedSkillsValue);
        document.getElementById("video-progress-DOM-based-XSS").value = Math.ceil(OverallDOMBasedSkillsValue);
        SimZoneSkills1AddedtoBar = false;
        SimZoneSkills2AddedtoBar = false;

        playerScore.textContent = Number(playerScore.textContent) + playerScoreInLevel;
        playerScoreInLevel = 0;

        levelsCompleted.push("R0L9");

        rolesPlayed.push("Attacker");
        LastPlayedRole = "Attacker";
        completionTime = timeLimitInSeconds;



    } else if (roleId == 1 && (currentLevelNo == 1 || currentLevelNo == 200)) {
        document.getElementById("ANSRTXT3").style.color = "red";
        document.getElementById("ANSRTXT1").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX19nYofdvyl8WVH4zleRyCtSyOiYLN3Fx0DmtVlUOTP8LadWX+rA4bs+", gameStatus).toString(CryptoJS.enc.Utf8) + String(tileLocations[0]) + ',' + String(tileLocations[2]) + '.';
        document.getElementById("ANSRTXT2").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX18ziWT+OzLNsFlMJ05/yMEC73NzTSDrTn2rpF4AqR8ln1M0nEfQU5yrPAYRykWVGcCv1xyRXJuVpAkrJHywTavL/hzRBvz/wsT/wFdev7/srDVBGRY0FE8OkC/fo5y5g7J3OB0No0ojOg==", gameStatus).toString(CryptoJS.enc.Utf8);
        document.getElementById("ANSRTXT3").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX18scMmFu13y6NBY1AG2i5iXJHYPz9JCFS5KqfZ5tRtEzcm7EeY/vlZE", gameStatus).toString(CryptoJS.enc.Utf8) + String(tileLocations[1]) + ',' + String(tileLocations[3]) + '.';
        document.getElementById("ANSRTXT4").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX1+o3msxsuvMeIBLxSe01y2S3bHqgV5Nly26MkyMxlpPU43kvXv20BTg/mnhmpegpo3VLxBo4FcdNY9sjBw0/23DmH3d42rp8pYiusc/aa7E27rRIANtbR+UWfbiULqPsybsUO/5uf/zSQ==", gameStatus).toString(CryptoJS.enc.Utf8);
        $('div#AnswerPopUp1').show();
        playerQuestionAnswersString = playerQuestionAnswersString.concat("!Role:1,Level:1");
        currentLevelNo = 2;

        if (questionTile1Selected) {
            playerScoreInLevel = playerScoreInLevel + 2;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:1");
            DefenderReflectedSkillsValue = DefenderReflectedSkillsValue + defenderRefOffset;
            OverallReflectedSkillsValue = OverallReflectedSkillsValue + overallRefOffset;

            correctDefenderAnswersList.push("R1L1Q1A1");
            if (!suggestedRoleList.includes("Defender")) {
                suggestedRoleList.push("Defender");
            }
        }

        if (questionTile3Selected) {
            playerScoreInLevel = playerScoreInLevel + 2;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:3");
            DefenderReflectedSkillsValue = DefenderReflectedSkillsValue + defenderRefOffset;
            OverallReflectedSkillsValue = OverallReflectedSkillsValue + overallRefOffset;

            correctDefenderAnswersList.push("R1L1Q1A3");
            if (!suggestedRoleList.includes("Defender")) {
                suggestedRoleList.push("Defender");
            }
        }

        if (questionTile2Selected) {
            playerScoreInLevel = playerScoreInLevel - 1;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:2");
            incorrectDefenderAnswersList.push("R1L1Q1A2");

            OverallStoredSkillsValue = overallStoredOffset - 2;
            DefenderStoredSkillsValue = DefenderStoredSkillsValue - 2;

            if (DefenderStoredSkillsValue < 0) {
                DefenderStoredSkillsValue = 0;
            }

            if (OverallStoredSkillsValue < 0) {
                OverallStoredSkillsValue = 0;
            }



            if (!suggestedRoleList.includes("Defender")) {
                suggestedRoleList.push("Defender");
            }
        }

        if (questionTile4Selected) {
            playerScoreInLevel = playerScoreInLevel - 1;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:4");
            incorrectDefenderAnswersList.push("R1L1Q1A4");
            if (!suggestedRoleList.includes("Defender")) {
                suggestedRoleList.push("Defender");
            }
        }

        if (questionTile1Selected && questionTile2Selected && questionTile3Selected && questionTile4Selected) {
            playerScoreInLevel = 0;
        }

        if (playerScoreInLevel < 0) {
            playerScoreInLevel = 0;
        }

        playerScore.textContent = Number(playerScore.textContent) + playerScoreInLevel;
        playerScoreInLevel = 0;

        document.getElementById("Ref-XSS-Skills-Value").innerText = Math.ceil(OverallReflectedSkillsValue);
        document.getElementById("video-progress-Ref-XSS").value = Math.ceil(OverallReflectedSkillsValue);
        SimZoneSkills1AddedtoBar = false;
        SimZoneSkills2AddedtoBar = false;

        levelsCompleted.push("R1L1");

    } else if (roleId == 1 && currentLevelNo == 2) {
        document.getElementById("ANSRTXT3").style.color = "red";
        document.getElementById("ANSRTXT1").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX1+qHS1laNqnElapo725wTWKWWTM3BW0Mnv1ItABfho2FAbrzK/sweGk", gameStatus).toString(CryptoJS.enc.Utf8) + String(tileLocations[2]) + ',' + String(tileLocations[3]) + '.';
        document.getElementById("ANSRTXT2").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX18ziWT+OzLNsFlMJ05/yMEC73NzTSDrTn2rpF4AqR8ln1M0nEfQU5yrPAYRykWVGcCv1xyRXJuVpAkrJHywTavL/hzRBvz/wsT/wFdev7/srDVBGRY0FE8OkC/fo5y5g7J3OB0No0ojOg==", gameStatus).toString(CryptoJS.enc.Utf8);
        document.getElementById("ANSRTXT3").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX19L8BaroK1LhA6RqJdovAkrCCyprzipJrPuBY5T9GEo94uhs0veRV39", gameStatus).toString(CryptoJS.enc.Utf8) + String(tileLocations[0]) + ',' + String(tileLocations[1]) + '.';
        document.getElementById("ANSRTXT4").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX1+o3msxsuvMeIBLxSe01y2S3bHqgV5Nly26MkyMxlpPU43kvXv20BTg/mnhmpegpo3VLxBo4FcdNY9sjBw0/23DmH3d42rp8pYiusc/aa7E27rRIANtbR+UWfbiULqPsybsUO/5uf/zSQ==", gameStatus).toString(CryptoJS.enc.Utf8);
        $('div#AnswerPopUp1').show();
        playerQuestionAnswersString = playerQuestionAnswersString.concat("!Role:1,Level:2");
        currentLevelNo = 3;
        if (questionTile3Selected) {
            playerScoreInLevel = playerScoreInLevel + 2;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:3");
            DefenderStoredSkillsValue = DefenderStoredSkillsValue + defenderStoredOffset;
            OverallStoredSkillsValue = OverallStoredSkillsValue + overallStoredOffset;

            correctDefenderAnswersList.push("R1L2Q1A3");
            if (!suggestedRoleList.includes("Defender")) {
                suggestedRoleList.push("Defender");
            }
        }

        if (questionTile4Selected) {
            playerScoreInLevel = playerScoreInLevel + 2;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:4");
            DefenderStoredSkillsValue = DefenderStoredSkillsValue + defenderStoredOffset;
            OverallStoredSkillsValue = OverallStoredSkillsValue + overallStoredOffset;

            correctDefenderAnswersList.push("R1L2Q1A4");
            if (!suggestedRoleList.includes("Defender")) {
                suggestedRoleList.push("Defender");
            }
        }

        if (questionTile1Selected) {
            playerScoreInLevel = playerScoreInLevel - 1;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:1");
            incorrectDefenderAnswersList.push("R1L2Q1A1");
            if (!suggestedRoleList.includes("Defender")) {
                suggestedRoleList.push("Defender");
            }
        }

        if (questionTile2Selected) {
            playerScoreInLevel = playerScoreInLevel - 1;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:2");
            incorrectDefenderAnswersList.push("R1L2Q1A2");

            DefenderReflectedSkillsValue = DefenderReflectedSkillsValue - 2;

            if (DefenderReflectedSkillsValue < 0) {
                DefenderReflectedSkillsValue = 0;
            }


            OverallReflectedSkillsValue = OverallReflectedSkillsValue - 2;


            if (OverallReflectedSkillsValue < 0) {
                OverallReflectedSkillsValue = 0;
            }


            if (!suggestedRoleList.includes("Defender")) {
                suggestedRoleList.push("Defender");
            }
        }

        if (questionTile1Selected && questionTile2Selected && questionTile3Selected && questionTile4Selected) {
            playerScoreInLevel = 0;
        }

        if (playerScoreInLevel < 0) {
            playerScoreInLevel = 0;
        }

        playerScore.textContent = Number(playerScore.textContent) + playerScoreInLevel;
        playerScoreInLevel = 0;

        document.getElementById("Stored-XSS-Skills-Value").innerText = Math.ceil(OverallStoredSkillsValue);
        document.getElementById("video-progress-Stored-XSS").value = Math.ceil(OverallStoredSkillsValue);
        SimZoneSkills1AddedtoBar = false;
        SimZoneSkills2AddedtoBar = false;
        levelsCompleted.push("R1L2");
    } else if (roleId == 1 && currentLevelNo == 3) {
        document.getElementById("ANSRTXT3").style.color = "red";
        document.getElementById("ANSRTXT1").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX182suK2pu2Yq1QKNWCcL72NyNrCXQHFVb+1OpQXodZkQ8ECReE1gbN1", gameStatus).toString(CryptoJS.enc.Utf8) + String(tileLocations[0]) + ',' + String(tileLocations[1]) + ',' + String(tileLocations[2]) + '.';
        document.getElementById("ANSRTXT2").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX18ziWT+OzLNsFlMJ05/yMEC73NzTSDrTn2rpF4AqR8ln1M0nEfQU5yrPAYRykWVGcCv1xyRXJuVpAkrJHywTavL/hzRBvz/wsT/wFdev7/srDVBGRY0FE8OkC/fo5y5g7J3OB0No0ojOg==", gameStatus).toString(CryptoJS.enc.Utf8);
        document.getElementById("ANSRTXT3").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX19UjdtWwpoqW5RKLVCXB//yu93uWwiN/jIsVbzD2tG2iwBJBJ+GHLwR", gameStatus).toString(CryptoJS.enc.Utf8) + String(tileLocations[3]) + '.';
        document.getElementById("ANSRTXT4").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX1+o3msxsuvMeIBLxSe01y2S3bHqgV5Nly26MkyMxlpPU43kvXv20BTg/mnhmpegpo3VLxBo4FcdNY9sjBw0/23DmH3d42rp8pYiusc/aa7E27rRIANtbR+UWfbiULqPsybsUO/5uf/zSQ==", gameStatus).toString(CryptoJS.enc.Utf8);
        $('div#AnswerPopUp1').show();
        playerQuestionAnswersString = playerQuestionAnswersString.concat("!Role:1,Level:3");
        currentLevelNo = 4;
        if (questionTile1Selected) {
            playerScoreInLevel = playerScoreInLevel + 2;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:1");
            DefenderDOMBasedSkillsValue = DefenderDOMBasedSkillsValue + defenderDOMOffset;
            OverallDOMBasedSkillsValue = OverallDOMBasedSkillsValue + overallDOMOffset;

            correctDefenderAnswersList.push("R1L3Q1A1");
            if (!suggestedRoleList.includes("Defender")) {
                suggestedRoleList.push("Defender");
            }
        }

        if (questionTile2Selected) {
            playerScoreInLevel = playerScoreInLevel + 2;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:2");
            DefenderDOMBasedSkillsValue = DefenderDOMBasedSkillsValue + defenderDOMOffset;
            OverallDOMBasedSkillsValue = OverallDOMBasedSkillsValue + overallDOMOffset;

            correctDefenderAnswersList.push("R1L3Q1A2");
            if (!suggestedRoleList.includes("Defender")) {
                suggestedRoleList.push("Defender");
            }
        }

        if (questionTile3Selected) {
            playerScoreInLevel = playerScoreInLevel + 2;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:3");
            DefenderDOMBasedSkillsValue = DefenderDOMBasedSkillsValue + defenderDOMOffset;
            OverallDOMBasedSkillsValue = OverallDOMBasedSkillsValue + overallDOMOffset;

            correctDefenderAnswersList.push("R1L3Q1A3");
            if (!suggestedRoleList.includes("Defender")) {
                suggestedRoleList.push("Defender");
            }
        }

        if (questionTile4Selected) {
            playerScoreInLevel = playerScoreInLevel - 1;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:4");
            incorrectDefenderAnswersList.push("R1L3Q1A4");

            DefenderDOMBasedSkillsValue = DefenderDOMBasedSkillsValue - 2;

            if (DefenderDOMBasedSkillsValue < 0) {
                DefenderDOMBasedSkillsValue = 0;
            }



            OverallDOMBasedSkillsValue = OverallDOMBasedSkillsValue - 2;



            if (OverallDOMBasedSkillsValue < 0) {
                OverallDOMBasedSkillsValue = 0;
            }
            if (!suggestedRoleList.includes("Defender")) {
                suggestedRoleList.push("Defender");
            }
        }

        if (questionTile1Selected && questionTile2Selected && questionTile3Selected && questionTile4Selected) {
            playerScoreInLevel = 0;
        }

        if (playerScoreInLevel < 0) {
            playerScoreInLevel = 0;
        }

        playerScore.textContent = Number(playerScore.textContent) + playerScoreInLevel;
        playerScoreInLevel = 0;

        document.getElementById("DOM-based-XSS-Skills-Value").innerText = Math.ceil(OverallStoredSkillsValue);
        document.getElementById("video-progress-DOM-based-XSS").value = Math.ceil(OverallStoredSkillsValue);
        SimZoneSkills1AddedtoBar = false;
        SimZoneSkills2AddedtoBar = false;
        levelsCompleted.push("R1L3");

    } else if (roleId == 1 && currentLevelNo == 4) {
        document.getElementById("ANSRTXT3").style.color = "red";
        document.getElementById("ANSRTXT1").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX1+oLhTeY65mGSpfcMACYlIJbIBB93dKD8kZNqZjh2bU/OHJkYpfi0Rr", gameStatus).toString(CryptoJS.enc.Utf8) + String(tileLocations[0]) + ',' + String(tileLocations[1]) + ',' + String(tileLocations[2]) + '.';
        document.getElementById("ANSRTXT2").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX18ziWT+OzLNsFlMJ05/yMEC73NzTSDrTn2rpF4AqR8ln1M0nEfQU5yrPAYRykWVGcCv1xyRXJuVpAkrJHywTavL/hzRBvz/wsT/wFdev7/srDVBGRY0FE8OkC/fo5y5g7J3OB0No0ojOg==", gameStatus).toString(CryptoJS.enc.Utf8);
        document.getElementById("ANSRTXT3").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX1+vDMsuynpn1N7funays5MUQ7tqis46y1ttCkJkQmPRZrGEFBbS8Vo8", gameStatus).toString(CryptoJS.enc.Utf8) + String(tileLocations[3]) + '.';
        document.getElementById("ANSRTXT4").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX1+o3msxsuvMeIBLxSe01y2S3bHqgV5Nly26MkyMxlpPU43kvXv20BTg/mnhmpegpo3VLxBo4FcdNY9sjBw0/23DmH3d42rp8pYiusc/aa7E27rRIANtbR+UWfbiULqPsybsUO/5uf/zSQ==", gameStatus).toString(CryptoJS.enc.Utf8);
        $('div#AnswerPopUp1').show();
        playerQuestionAnswersString = playerQuestionAnswersString.concat("!Role:1,Level:4");
        currentLevelNo = 5;

        if (questionTile1Selected) {
            playerScoreInLevel = playerScoreInLevel + 2;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:1");
            DefenderDOMBasedSkillsValue = DefenderDOMBasedSkillsValue + defenderDOMOffset;
            OverallDOMBasedSkillsValue = OverallDOMBasedSkillsValue + overallDOMOffset;

            correctDefenderAnswersList.push("R1L4Q1A1");
            if (!suggestedRoleList.includes("Defender")) {
                suggestedRoleList.push("Defender");
            }
        }

        if (questionTile4Selected) {
            playerScoreInLevel = playerScoreInLevel - 1;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:4");
            incorrectDefenderAnswersList.push("R1L4Q1A4");
            DefenderDOMBasedSkillsValue = DefenderDOMBasedSkillsValue - 2;

            if (DefenderDOMBasedSkillsValue < 0) {
                DefenderDOMBasedSkillsValue = 0;
            }



            OverallDOMBasedSkillsValue = OverallDOMBasedSkillsValue - 2;




            if (OverallDOMBasedSkillsValue < 0) {
                OverallDOMBasedSkillsValue = 0;
            }

            if (!suggestedRoleList.includes("Defender")) {
                suggestedRoleList.push("Defender");
            }
        }

        if (questionTile2Selected) {
            playerScoreInLevel = playerScoreInLevel + 2;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:2");
            DefenderDOMBasedSkillsValue = DefenderDOMBasedSkillsValue + defenderDOMOffset;
            OverallDOMBasedSkillsValue = OverallDOMBasedSkillsValue + overallDOMOffset;

            correctDefenderAnswersList.push("R1L4Q1A2");
            if (!suggestedRoleList.includes("Defender")) {
                suggestedRoleList.push("Defender");
            }
        }

        if (questionTile3Selected) {
            playerScoreInLevel = playerScoreInLevel + 2;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:3");
            DefenderDOMBasedSkillsValue = DefenderDOMBasedSkillsValue + defenderDOMOffset;
            OverallDOMBasedSkillsValue = OverallDOMBasedSkillsValue + overallDOMOffset;

            correctDefenderAnswersList.push("R1L4Q1A3");
            if (!suggestedRoleList.includes("Defender")) {
                suggestedRoleList.push("Defender");
            }
        }

        if (questionTile1Selected && questionTile2Selected && questionTile3Selected && questionTile4Selected) {
            playerScoreInLevel = 0;
        }

        if (playerScoreInLevel < 0) {
            playerScoreInLevel = 0;
        }

        playerScore.textContent = Number(playerScore.textContent) + playerScoreInLevel;
        playerScoreInLevel = 0;

        document.getElementById("DOM-based-XSS-Skills-Value").innerText = Math.ceil(OverallStoredSkillsValue);
        document.getElementById("video-progress-DOM-based-XSS").value = Math.ceil(OverallStoredSkillsValue);
        SimZoneSkills1AddedtoBar = false;
        SimZoneSkills2AddedtoBar = false;

        levelsCompleted.push("R1L4");




    } else if (roleId == 1 && currentLevelNo == 5) {
        document.getElementById("ANSRTXT3").style.color = "red";
        document.getElementById("ANSRTXT1").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX1+yaiVBRtAfB6Qrbujr6SMB2oPOQI4iBEm8Ls+Zm3vHRjUlDilp8MpQ", gameStatus).toString(CryptoJS.enc.Utf8) + String(tileLocations[0]) + ',' + String(tileLocations[1]) + '.';
        document.getElementById("ANSRTXT2").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX18ziWT+OzLNsFlMJ05/yMEC73NzTSDrTn2rpF4AqR8ln1M0nEfQU5yrPAYRykWVGcCv1xyRXJuVpAkrJHywTavL/hzRBvz/wsT/wFdev7/srDVBGRY0FE8OkC/fo5y5g7J3OB0No0ojOg==", gameStatus).toString(CryptoJS.enc.Utf8);
        document.getElementById("ANSRTXT3").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX1/PXLK4LfxMdJKPw8Im327UlfNFG3qdKMJQXKy5N5qpWRfW5jHAuyVV", gameStatus).toString(CryptoJS.enc.Utf8) + String(tileLocations[2]) + ',' + String(tileLocations[3]) + '.';
        document.getElementById("ANSRTXT4").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX1+o3msxsuvMeIBLxSe01y2S3bHqgV5Nly26MkyMxlpPU43kvXv20BTg/mnhmpegpo3VLxBo4FcdNY9sjBw0/23DmH3d42rp8pYiusc/aa7E27rRIANtbR+UWfbiULqPsybsUO/5uf/zSQ==", gameStatus).toString(CryptoJS.enc.Utf8);
        $('div#AnswerPopUp1').show();
        playerQuestionAnswersString = playerQuestionAnswersString.concat("!Role:1,Level:5");
        currentLevelNo = 6;

        if (questionTile1Selected) {
            playerScoreInLevel = playerScoreInLevel + 2;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:1");
            DefenderStoredSkillsValue = DefenderStoredSkillsValue + defenderStoredOffset;
            DefenderReflectedSkillsValue = DefenderReflectedSkillsValue + defenderRefOffset;
            DefenderDOMBasedSkillsValue = DefenderDOMBasedSkillsValue + defenderDOMOffset;
            OverallDOMBasedSkillsValue = OverallDOMBasedSkillsValue + overallDOMOffset;
            OverallReflectedSkillsValue = OverallReflectedSkillsValue + overallRefOffset;
            OverallStoredSkillsValue = OverallStoredSkillsValue + overallStoredOffset;

            correctDefenderAnswersList.push("R1L5Q1A1");
            if (!suggestedRoleList.includes("Defender")) {
                suggestedRoleList.push("Defender");
            }
        }

        if (questionTile4Selected) {
            playerScoreInLevel = playerScoreInLevel - 1;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:4");
            incorrectDefenderAnswersList.push("R1L5Q1A4");
            if (!suggestedRoleList.includes("Defender")) {
                suggestedRoleList.push("Defender");
            }
        }

        if (questionTile2Selected) {
            playerScoreInLevel = playerScoreInLevel + 2;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:2");
            DefenderStoredSkillsValue = DefenderStoredSkillsValue + defenderStoredOffset;
            DefenderReflectedSkillsValue = DefenderReflectedSkillsValue + defenderRefOffset;
            DefenderDOMBasedSkillsValue = DefenderDOMBasedSkillsValue + defenderDOMOffset;
            OverallDOMBasedSkillsValue = OverallDOMBasedSkillsValue + overallDOMOffset;
            OverallReflectedSkillsValue = OverallReflectedSkillsValue + overallRefOffset;
            OverallStoredSkillsValue = OverallStoredSkillsValue + overallStoredOffset;

            correctDefenderAnswersList.push("R1L5Q1A2");
            if (!suggestedRoleList.includes("Defender")) {
                suggestedRoleList.push("Defender");
            }
        }

        if (questionTile3Selected) {
            playerScoreInLevel = playerScoreInLevel - 1;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:3");
            incorrectDefenderAnswersList.push("R1L5Q1A3");
            if (!suggestedRoleList.includes("Defender")) {
                suggestedRoleList.push("Defender");
            }
        }

        if (questionTile1Selected && questionTile2Selected && questionTile3Selected && questionTile4Selected) {
            playerScoreInLevel = 0;
        }

        if (playerScoreInLevel < 0) {
            playerScoreInLevel = 0;
        }

        playerScore.textContent = Number(playerScore.textContent) + playerScoreInLevel;
        playerScoreInLevel = 0;

        document.getElementById("Ref-XSS-Skills-Value").innerText = Math.ceil(OverallReflectedSkillsValue);
        document.getElementById("video-progress-Ref-XSS").value = Math.ceil(OverallReflectedSkillsValue);
        document.getElementById("Stored-XSS-Skills-Value").innerText = Math.ceil(OverallStoredSkillsValue);
        document.getElementById("video-progress-Stored-XSS").value = Math.ceil(OverallStoredSkillsValue);
        document.getElementById("DOM-based-XSS-Skills-Value").innerText = Math.ceil(OverallDOMBasedSkillsValue);
        document.getElementById("video-progress-DOM-based-XSS").value = Math.ceil(OverallDOMBasedSkillsValue);
        SimZoneSkills1AddedtoBar = false;
        SimZoneSkills2AddedtoBar = false;


        levelsCompleted.push("R1L5");

    } else if (roleId == 1 && currentLevelNo == 6) {
        document.getElementById("ANSRTXT3").style.color = "red";
        document.getElementById("ANSRTXT1").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX1+7VTVSo78zC51Z0Phz5E+//TqhmQaACMlVweZoI3hEh+NhTOvysH/0", gameStatus).toString(CryptoJS.enc.Utf8) + String(tileLocations[0]) + ',' + String(tileLocations[3]) + '.';
        document.getElementById("ANSRTXT2").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX18ziWT+OzLNsFlMJ05/yMEC73NzTSDrTn2rpF4AqR8ln1M0nEfQU5yrPAYRykWVGcCv1xyRXJuVpAkrJHywTavL/hzRBvz/wsT/wFdev7/srDVBGRY0FE8OkC/fo5y5g7J3OB0No0ojOg==", gameStatus).toString(CryptoJS.enc.Utf8);
        document.getElementById("ANSRTXT3").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX1/ECPuONM/BLqKrnP3b+OG5LOjNKslwsHrnJnslw2KlEEH2RklT9A0b", gameStatus).toString(CryptoJS.enc.Utf8) + +String(tileLocations[1]) + ',' + String(tileLocations[2]) + '.';
        document.getElementById("ANSRTXT4").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX1+o3msxsuvMeIBLxSe01y2S3bHqgV5Nly26MkyMxlpPU43kvXv20BTg/mnhmpegpo3VLxBo4FcdNY9sjBw0/23DmH3d42rp8pYiusc/aa7E27rRIANtbR+UWfbiULqPsybsUO/5uf/zSQ==", gameStatus).toString(CryptoJS.enc.Utf8);
        $('div#AnswerPopUp1').show();
        playerQuestionAnswersString = playerQuestionAnswersString.concat("!Role:1,Level:6");
        currentLevelNo = 100;
        clearInterval(timerInterval);

        if (questionTile1Selected) {
            playerScoreInLevel = playerScoreInLevel + 2;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:1");
            DefenderStoredSkillsValue = DefenderStoredSkillsValue + defenderStoredOffset;
            DefenderReflectedSkillsValue = DefenderReflectedSkillsValue + defenderRefOffset;
            DefenderDOMBasedSkillsValue = DefenderDOMBasedSkillsValue + defenderDOMOffset;
            OverallDOMBasedSkillsValue = OverallDOMBasedSkillsValue + overallDOMOffset;
            OverallReflectedSkillsValue = OverallReflectedSkillsValue + overallRefOffset;
            OverallStoredSkillsValue = OverallStoredSkillsValue + overallStoredOffset;

            correctDefenderAnswersList.push("R1L6Q1A1");
            if (!suggestedRoleList.includes("Defender")) {
                suggestedRoleList.push("Defender");
            }
        }

        if (questionTile4Selected) {
            playerScoreInLevel = playerScoreInLevel + 2;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:4");
            DefenderStoredSkillsValue = DefenderStoredSkillsValue + defenderStoredOffset;
            DefenderReflectedSkillsValue = DefenderReflectedSkillsValue + defenderRefOffset;
            DefenderDOMBasedSkillsValue = DefenderDOMBasedSkillsValue + defenderDOMOffset;
            OverallDOMBasedSkillsValue = OverallDOMBasedSkillsValue + overallDOMOffset;
            OverallReflectedSkillsValue = OverallReflectedSkillsValue + overallRefOffset;
            OverallStoredSkillsValue = OverallStoredSkillsValue + overallStoredOffset;

            correctDefenderAnswersList.push("R1L6Q1A4");
            if (!suggestedRoleList.includes("Defender")) {
                suggestedRoleList.push("Defender");
            }
        }

        if (questionTile2Selected) {
            playerScoreInLevel = playerScoreInLevel - 1;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:2");
            incorrectDefenderAnswersList.push("R1L6Q1A2");

            DefenderDOMBasedSkillsValue = DefenderDOMBasedSkillsValue - 2;

            if (DefenderDOMBasedSkillsValue < 0) {
                DefenderDOMBasedSkillsValue = 0;
            }


            OverallDOMBasedSkillsValue = OverallDOMBasedSkillsValue - 2;


            if (OverallDOMBasedSkillsValue < 0) {
                OverallDOMBasedSkillsValue = 0;
            }
            if (!suggestedRoleList.includes("Defender")) {
                suggestedRoleList.push("Defender");
            }

        }

        if (questionTile3Selected) {
            playerScoreInLevel = playerScoreInLevel - 1;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:3");
            incorrectDefenderAnswersList.push("R1L6Q1A3");
            if (!suggestedRoleList.includes("Defender")) {
                suggestedRoleList.push("Defender");
            }

        }

        if (questionTile1Selected && questionTile2Selected && questionTile3Selected && questionTile4Selected) {
            playerScoreInLevel = 0;
        }

        if (playerScoreInLevel < 0) {
            playerScoreInLevel = 0;
        }

        playerScore.textContent = Number(playerScore.textContent) + playerScoreInLevel;
        playerScoreInLevel = 0;

        document.getElementById("Ref-XSS-Skills-Value").innerText = Math.ceil(OverallReflectedSkillsValue);
        document.getElementById("video-progress-Ref-XSS").value = Math.ceil(OverallReflectedSkillsValue);
        document.getElementById("Stored-XSS-Skills-Value").innerText = Math.ceil(OverallStoredSkillsValue);
        document.getElementById("video-progress-Stored-XSS").value = Math.ceil(OverallStoredSkillsValue);
        document.getElementById("DOM-based-XSS-Skills-Value").innerText = Math.ceil(OverallDOMBasedSkillsValue);
        document.getElementById("video-progress-DOM-based-XSS").value = Math.ceil(OverallDOMBasedSkillsValue);
        SimZoneSkills1AddedtoBar = false;
        SimZoneSkills2AddedtoBar = false;

        levelsCompleted.push("R1L6");

        completionTime = timeLimitInSeconds;
        rolesPlayed.push("Defender");
        LastPlayedRole = "Defender";




    } else if (roleId == 2 && (currentLevelNo == 1 || currentLevelNo == 200)) {
        document.getElementById("ANSRTXT3").style.color = "red";
        document.getElementById("ANSRTXT1").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX1/N2QDnR/r6ckptEE5eDfBUATsguxxtA4lbvVLzW3d1+Yig4OdlhSv9", gameStatus).toString(CryptoJS.enc.Utf8) + String(tileLocations[2]) + ',' + String(tileLocations[3]) + '.';
        document.getElementById("ANSRTXT2").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX18ziWT+OzLNsFlMJ05/yMEC73NzTSDrTn2rpF4AqR8ln1M0nEfQU5yrPAYRykWVGcCv1xyRXJuVpAkrJHywTavL/hzRBvz/wsT/wFdev7/srDVBGRY0FE8OkC/fo5y5g7J3OB0No0ojOg==", gameStatus).toString(CryptoJS.enc.Utf8);
        document.getElementById("ANSRTXT3").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX187j1p5u6y59k8oV7Z8smYQZ7ooG9KLH08B+or1DmAFV9KdSGoVD7BB", gameStatus).toString(CryptoJS.enc.Utf8) + String(tileLocations[0]) + ',' + String(tileLocations[1]) + '.';
        document.getElementById("ANSRTXT4").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX1+o3msxsuvMeIBLxSe01y2S3bHqgV5Nly26MkyMxlpPU43kvXv20BTg/mnhmpegpo3VLxBo4FcdNY9sjBw0/23DmH3d42rp8pYiusc/aa7E27rRIANtbR+UWfbiULqPsybsUO/5uf/zSQ==", gameStatus).toString(CryptoJS.enc.Utf8);
        $('div#AnswerPopUp1').show();
        playerQuestionAnswersString = playerQuestionAnswersString.concat("!Role:2,Level:1");
        currentLevelNo = 2;
        if (questionTile3Selected) {
            playerScoreInLevel = playerScoreInLevel + 2;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:3");
            UserStoredSkillsValue = UserStoredSkillsValue + userStoredOffset;
            UserReflectedSkillsValue = UserReflectedSkillsValue + userRefOffset;
            UserDOMBasedSkillsValue = UserDOMBasedSkillsValue + userDOMOffset;
            OverallDOMBasedSkillsValue = OverallDOMBasedSkillsValue + overallDOMOffset;
            OverallReflectedSkillsValue = OverallReflectedSkillsValue + overallRefOffset;
            OverallStoredSkillsValue = OverallStoredSkillsValue + overallStoredOffset;

            correctUserAnswersList.push("R2L1Q1A3");
            if (!suggestedRoleList.includes("User")) {
                suggestedRoleList.push("User");
            }
        }

        if (questionTile4Selected) {
            playerScoreInLevel = playerScoreInLevel + 2;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:4");
            UserStoredSkillsValue = UserStoredSkillsValue + userStoredOffset;
            UserReflectedSkillsValue = UserReflectedSkillsValue + userRefOffset;
            UserDOMBasedSkillsValue = UserDOMBasedSkillsValue + userDOMOffset;
            OverallDOMBasedSkillsValue = OverallDOMBasedSkillsValue + overallDOMOffset;
            OverallReflectedSkillsValue = OverallReflectedSkillsValue + overallRefOffset;
            OverallStoredSkillsValue = OverallStoredSkillsValue + overallStoredOffset;

            correctUserAnswersList.push("R2L1Q1A4");
            if (!suggestedRoleList.includes("User")) {
                suggestedRoleList.push("User");
            }
        }

        if (questionTile1Selected) {
            playerScoreInLevel = playerScoreInLevel - 1;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:1");
            incorrectUserAnswersList.push("R2L1Q1A1");

            UserDOMBasedSkillsValue = UserDOMBasedSkillsValue - 2;
            UserReflectedSkillsValue = UserReflectedSkillsValue - 2;
            UserStoredSkillsValue = UserStoredSkillsValue - 2;

            if (UserDOMBasedSkillsValue < 0) {
                UserDOMBasedSkillsValue = 0;
            }

            if (UserReflectedSkillsValue < 0) {
                UserReflectedSkillsValue = 0;
            }

            if (UserStoredSkillsValue < 0) {
                UserStoredSkillsValue = 0;
            }

            OverallReflectedSkillsValue = OverallReflectedSkillsValue - 2;
            OverallStoredSkillsValue = OverallStoredSkillsValue - 2;
            OverallDOMBasedSkillsValue = OverallDOMBasedSkillsValue - 2;

            if (OverallReflectedSkillsValue < 0) {
                OverallReflectedSkillsValue = 0;
            }

            if (OverallStoredSkillsValue < 0) {
                OverallStoredSkillsValue = 0;
            }


            if (OverallDOMBasedSkillsValue < 0) {
                OverallDOMBasedSkillsValue = 0;
            }

            if (!suggestedRoleList.includes("User")) {
                suggestedRoleList.push("User");
            }
        }

        if (questionTile2Selected) {
            playerScoreInLevel = playerScoreInLevel - 1;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:2");
            incorrectUserAnswersList.push("R2L1Q1A2");

            UserDOMBasedSkillsValue = UserDOMBasedSkillsValue - 2;
            UserReflectedSkillsValue = UserReflectedSkillsValue - 2;
            UserStoredSkillsValue = UserStoredSkillsValue - 2;

            if (UserDOMBasedSkillsValue < 0) {
                UserDOMBasedSkillsValue = 0;
            }

            if (UserReflectedSkillsValue < 0) {
                UserReflectedSkillsValue = 0;
            }

            if (UserStoredSkillsValue < 0) {
                UserStoredSkillsValue = 0;
            }


            OverallReflectedSkillsValue = OverallReflectedSkillsValue - 2;
            OverallStoredSkillsValue = OverallStoredSkillsValue - 2;
            OverallDOMBasedSkillsValue = OverallDOMBasedSkillsValue - 2;

            if (OverallReflectedSkillsValue < 0) {
                OverallReflectedSkillsValue = 0;
            }

            if (OverallStoredSkillsValue < 0) {
                OverallStoredSkillsValue = 0;
            }


            if (OverallDOMBasedSkillsValue < 0) {
                OverallDOMBasedSkillsValue = 0;
            }

            if (!suggestedRoleList.includes("User")) {
                suggestedRoleList.push("User");
            }
        }

        if (questionTile1Selected && questionTile2Selected && questionTile3Selected && questionTile4Selected) {
            playerScoreInLevel = 0;
        }

        if (playerScoreInLevel < 0) {
            playerScoreInLevel = 0;
        }

        playerScore.textContent = Number(playerScore.textContent) + playerScoreInLevel;
        playerScoreInLevel = 0;


        document.getElementById("Ref-XSS-Skills-Value").innerText = Math.ceil(OverallReflectedSkillsValue);
        document.getElementById("video-progress-Ref-XSS").value = Math.ceil(OverallReflectedSkillsValue);
        document.getElementById("Stored-XSS-Skills-Value").innerText = Math.ceil(OverallStoredSkillsValue);
        document.getElementById("video-progress-Stored-XSS").value = Math.ceil(OverallStoredSkillsValue);
        document.getElementById("DOM-based-XSS-Skills-Value").innerText = Math.ceil(OverallDOMBasedSkillsValue);
        document.getElementById("video-progress-DOM-based-XSS").value = Math.ceil(OverallDOMBasedSkillsValue);
        SimZoneSkills1AddedtoBar = false;
        SimZoneSkills2AddedtoBar = false;

        levelsCompleted.push("R2L1");
    } else if (roleId == 2 && currentLevelNo == 2) {
        document.getElementById("ANSRTXT3").style.color = "red";
        document.getElementById("ANSRTXT1").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX1+m6D1ptsuIFJjJsCmwUOP9u7t0erOwk0QVLM4QAdUCiF/lTteLpYkT", gameStatus).toString(CryptoJS.enc.Utf8) + String(tileLocations[2]) + ',' + String(tileLocations[3]) + '.';
        document.getElementById("ANSRTXT2").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX18ziWT+OzLNsFlMJ05/yMEC73NzTSDrTn2rpF4AqR8ln1M0nEfQU5yrPAYRykWVGcCv1xyRXJuVpAkrJHywTavL/hzRBvz/wsT/wFdev7/srDVBGRY0FE8OkC/fo5y5g7J3OB0No0ojOg==", gameStatus).toString(CryptoJS.enc.Utf8);
        document.getElementById("ANSRTXT3").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX18tYDvzzvM1MXeM0PSWzrMacMnLV4keLJvIAiFl6K7Io/UDh71qUBVv", gameStatus).toString(CryptoJS.enc.Utf8) + String(tileLocations[0]) + ',' + String(tileLocations[1]) + '.';
        document.getElementById("ANSRTXT4").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX1+o3msxsuvMeIBLxSe01y2S3bHqgV5Nly26MkyMxlpPU43kvXv20BTg/mnhmpegpo3VLxBo4FcdNY9sjBw0/23DmH3d42rp8pYiusc/aa7E27rRIANtbR+UWfbiULqPsybsUO/5uf/zSQ==", gameStatus).toString(CryptoJS.enc.Utf8);
        $('div#AnswerPopUp1').show();
        playerQuestionAnswersString = playerQuestionAnswersString.concat("!Role:2,Level:2");
        currentLevelNo = 3;
        if (questionTile3Selected) {
            playerScoreInLevel = playerScoreInLevel + 2;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:3");
            UserStoredSkillsValue = UserStoredSkillsValue + userStoredOffset;
            UserReflectedSkillsValue = UserReflectedSkillsValue + userRefOffset;
            UserDOMBasedSkillsValue = UserDOMBasedSkillsValue + userDOMOffset;
            OverallDOMBasedSkillsValue = OverallDOMBasedSkillsValue + overallDOMOffset;
            OverallReflectedSkillsValue = OverallReflectedSkillsValue + overallRefOffset;
            OverallStoredSkillsValue = OverallStoredSkillsValue + overallStoredOffset;

            correctUserAnswersList.push("R2L2Q1A3");
            if (!suggestedRoleList.includes("User")) {
                suggestedRoleList.push("User");
            }
        }

        if (questionTile4Selected) {
            playerScoreInLevel = playerScoreInLevel + 2;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:4");
            UserStoredSkillsValue = UserStoredSkillsValue + userStoredOffset;
            UserReflectedSkillsValue = UserReflectedSkillsValue + userRefOffset;
            UserDOMBasedSkillsValue = UserDOMBasedSkillsValue + userDOMOffset;
            OverallDOMBasedSkillsValue = OverallDOMBasedSkillsValue + overallDOMOffset;
            OverallReflectedSkillsValue = OverallReflectedSkillsValue + overallRefOffset;
            OverallStoredSkillsValue = OverallStoredSkillsValue + overallStoredOffset;

            correctUserAnswersList.push("R2L2Q1A4");
            if (!suggestedRoleList.includes("User")) {
                suggestedRoleList.push("User");
            }
        }

        if (questionTile1Selected) {
            playerScoreInLevel = playerScoreInLevel - 1;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:1");
            incorrectUserAnswersList.push("R2L2Q1A1");
            UserDOMBasedSkillsValue = UserDOMBasedSkillsValue - 2;
            UserReflectedSkillsValue = UserReflectedSkillsValue - 2;
            UserStoredSkillsValue = UserStoredSkillsValue - 2;

            if (UserDOMBasedSkillsValue < 0) {
                UserDOMBasedSkillsValue = 0;
            }

            if (UserReflectedSkillsValue < 0) {
                UserReflectedSkillsValue = 0;
            }

            if (UserStoredSkillsValue < 0) {
                UserStoredSkillsValue = 0;
            }

            OverallReflectedSkillsValue = OverallReflectedSkillsValue - 2;
            OverallStoredSkillsValue = OverallStoredSkillsValue - 2;
            OverallDOMBasedSkillsValue = OverallDOMBasedSkillsValue - 2;

            if (OverallReflectedSkillsValue < 0) {
                OverallReflectedSkillsValue = 0;
            }

            if (OverallStoredSkillsValue < 0) {
                OverallStoredSkillsValue = 0;
            }


            if (OverallDOMBasedSkillsValue < 0) {
                OverallDOMBasedSkillsValue = 0;
            }


            if (!suggestedRoleList.includes("User")) {
                suggestedRoleList.push("User");
            }
        }

        if (questionTile2Selected) {
            playerScoreInLevel = playerScoreInLevel - 1;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:2");
            incorrectUserAnswersList.push("R2L2Q1A2");

            UserDOMBasedSkillsValue = UserDOMBasedSkillsValue - 2;
            UserReflectedSkillsValue = UserReflectedSkillsValue - 2;
            UserStoredSkillsValue = UserStoredSkillsValue - 2;

            if (UserDOMBasedSkillsValue < 0) {
                UserDOMBasedSkillsValue = 0;
            }

            if (UserReflectedSkillsValue < 0) {
                UserReflectedSkillsValue = 0;
            }

            if (UserStoredSkillsValue < 0) {
                UserStoredSkillsValue = 0;
            }
            if (!suggestedRoleList.includes("User")) {
                suggestedRoleList.push("User");
            }
        }

        if (questionTile1Selected && questionTile2Selected && questionTile3Selected && questionTile4Selected) {
            playerScoreInLevel = 0;
        }

        if (playerScoreInLevel < 0) {
            playerScoreInLevel = 0;
        }

        playerScore.textContent = Number(playerScore.textContent) + playerScoreInLevel;
        playerScoreInLevel = 0;
        document.getElementById("Ref-XSS-Skills-Value").innerText = Math.ceil(OverallReflectedSkillsValue);
        document.getElementById("video-progress-Ref-XSS").value = Math.ceil(OverallReflectedSkillsValue);
        document.getElementById("Stored-XSS-Skills-Value").innerText = Math.ceil(OverallStoredSkillsValue);
        document.getElementById("video-progress-Stored-XSS").value = Math.ceil(OverallStoredSkillsValue);
        document.getElementById("DOM-based-XSS-Skills-Value").innerText = Math.ceil(OverallDOMBasedSkillsValue);
        document.getElementById("video-progress-DOM-based-XSS").value = Math.ceil(OverallDOMBasedSkillsValue);
        SimZoneSkills1AddedtoBar = false;
        SimZoneSkills2AddedtoBar = false;

        levelsCompleted.push("R2L2");
    } else if (roleId == 2 && currentLevelNo == 3) {
        document.getElementById("ANSRTXT3").style.color = "red";
        document.getElementById("ANSRTXT1").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX19T18udsMTnuWqELCWMHUQPFBEIhfWeov5t378PPv7RmRfigD254VHE", gameStatus).toString(CryptoJS.enc.Utf8) + String(tileLocations[1]) + ',' + String(tileLocations[2]) + '.';
        document.getElementById("ANSRTXT2").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX18ziWT+OzLNsFlMJ05/yMEC73NzTSDrTn2rpF4AqR8ln1M0nEfQU5yrPAYRykWVGcCv1xyRXJuVpAkrJHywTavL/hzRBvz/wsT/wFdev7/srDVBGRY0FE8OkC/fo5y5g7J3OB0No0ojOg==", gameStatus).toString(CryptoJS.enc.Utf8);
        document.getElementById("ANSRTXT3").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX1+qQuqXSDDScezeuonQE36yC0lZMiANUGTzngf3avR15S2zU/LdskSd", gameStatus).toString(CryptoJS.enc.Utf8) + String(tileLocations[0]) + ',' + String(tileLocations[3]) + '.';
        document.getElementById("ANSRTXT4").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX1+o3msxsuvMeIBLxSe01y2S3bHqgV5Nly26MkyMxlpPU43kvXv20BTg/mnhmpegpo3VLxBo4FcdNY9sjBw0/23DmH3d42rp8pYiusc/aa7E27rRIANtbR+UWfbiULqPsybsUO/5uf/zSQ==", gameStatus).toString(CryptoJS.enc.Utf8);
        $('div#AnswerPopUp1').show();
        playerQuestionAnswersString = playerQuestionAnswersString.concat("!Role:2,Level:3");
        currentLevelNo = 4;
        if (questionTile2Selected) {
            playerScoreInLevel = playerScoreInLevel + 2;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:2");
            UserStoredSkillsValue = UserStoredSkillsValue + userStoredOffset;
            UserReflectedSkillsValue = UserReflectedSkillsValue + userRefOffset;
            UserDOMBasedSkillsValue = UserDOMBasedSkillsValue + userDOMOffset;
            OverallDOMBasedSkillsValue = OverallDOMBasedSkillsValue + overallDOMOffset;
            OverallReflectedSkillsValue = OverallReflectedSkillsValue + overallRefOffset;
            OverallStoredSkillsValue = OverallStoredSkillsValue + overallStoredOffset;

            correctUserAnswersList.push("R2L3Q1A2");
            if (!suggestedRoleList.includes("User")) {
                suggestedRoleList.push("User");
            }
        }

        if (questionTile3Selected) {
            playerScoreInLevel = playerScoreInLevel + 2;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:3");
            UserStoredSkillsValue = UserStoredSkillsValue + userStoredOffset;
            UserReflectedSkillsValue = UserReflectedSkillsValue + userRefOffset;
            UserDOMBasedSkillsValue = UserDOMBasedSkillsValue + userDOMOffset;
            OverallDOMBasedSkillsValue = OverallDOMBasedSkillsValue + overallDOMOffset;
            OverallReflectedSkillsValue = OverallReflectedSkillsValue + overallRefOffset;
            OverallStoredSkillsValue = OverallStoredSkillsValue + overallStoredOffset;

            correctUserAnswersList.push("R2L3Q1A3");
            if (!suggestedRoleList.includes("User")) {
                suggestedRoleList.push("User");
            }
        }

        if (questionTile1Selected) {
            playerScoreInLevel = playerScoreInLevel - 1;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:1");
            incorrectUserAnswersList.push("R2L3Q1A1");

            UserDOMBasedSkillsValue = UserDOMBasedSkillsValue - 2;
            UserReflectedSkillsValue = UserReflectedSkillsValue - 2;
            UserStoredSkillsValue = UserStoredSkillsValue - 2;

            if (UserDOMBasedSkillsValue < 0) {
                UserDOMBasedSkillsValue = 0;
            }

            if (UserReflectedSkillsValue < 0) {
                UserReflectedSkillsValue = 0;
            }

            if (UserStoredSkillsValue < 0) {
                UserStoredSkillsValue = 0;
            }

            OverallReflectedSkillsValue = OverallReflectedSkillsValue - 2;
            OverallStoredSkillsValue = OverallStoredSkillsValue - 2;
            OverallDOMBasedSkillsValue = OverallDOMBasedSkillsValue - 2;

            if (OverallReflectedSkillsValue < 0) {
                OverallReflectedSkillsValue = 0;
            }

            if (OverallStoredSkillsValue < 0) {
                OverallStoredSkillsValue = 0;
            }


            if (OverallDOMBasedSkillsValue < 0) {
                OverallDOMBasedSkillsValue = 0;
            }


            if (!suggestedRoleList.includes("User")) {
                suggestedRoleList.push("User");
            }
        }

        if (questionTile4Selected) {
            playerScoreInLevel = playerScoreInLevel - 1;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:4");
            incorrectUserAnswersList.push("R2L3Q1A4");

            UserDOMBasedSkillsValue = UserDOMBasedSkillsValue - 2;
            UserReflectedSkillsValue = UserReflectedSkillsValue - 2;
            UserStoredSkillsValue = UserStoredSkillsValue - 2;

            if (UserDOMBasedSkillsValue < 0) {
                UserDOMBasedSkillsValue = 0;
            }

            if (UserReflectedSkillsValue < 0) {
                UserReflectedSkillsValue = 0;
            }

            if (UserStoredSkillsValue < 0) {
                UserStoredSkillsValue = 0;
            }


            OverallReflectedSkillsValue = OverallReflectedSkillsValue - 2;
            OverallStoredSkillsValue = OverallStoredSkillsValue - 2;
            OverallDOMBasedSkillsValue = OverallDOMBasedSkillsValue - 2;

            if (OverallReflectedSkillsValue < 0) {
                OverallReflectedSkillsValue = 0;
            }

            if (OverallStoredSkillsValue < 0) {
                OverallStoredSkillsValue = 0;
            }


            if (OverallDOMBasedSkillsValue < 0) {
                OverallDOMBasedSkillsValue = 0;
            }

            if (!suggestedRoleList.includes("User")) {
                suggestedRoleList.push("User");
            }
        }

        if (questionTile1Selected && questionTile2Selected && questionTile3Selected && questionTile4Selected) {
            playerScoreInLevel = 0;
        }

        if (playerScoreInLevel < 0) {
            playerScoreInLevel = 0;
        }

        playerScore.textContent = Number(playerScore.textContent) + playerScoreInLevel;
        playerScoreInLevel = 0;
        document.getElementById("Ref-XSS-Skills-Value").innerText = Math.ceil(OverallReflectedSkillsValue);
        document.getElementById("video-progress-Ref-XSS").value = Math.ceil(OverallReflectedSkillsValue);
        document.getElementById("Stored-XSS-Skills-Value").innerText = Math.ceil(OverallStoredSkillsValue);
        document.getElementById("video-progress-Stored-XSS").value = Math.ceil(OverallStoredSkillsValue);
        document.getElementById("DOM-based-XSS-Skills-Value").innerText = Math.ceil(OverallDOMBasedSkillsValue);
        document.getElementById("video-progress-DOM-based-XSS").value = Math.ceil(OverallDOMBasedSkillsValue);
        SimZoneSkills1AddedtoBar = false;
        SimZoneSkills2AddedtoBar = false;

        levelsCompleted.push("R2L3");

    } else if (roleId == 2 && currentLevelNo == 4) {
        document.getElementById("ANSRTXT3").style.color = "red";
        document.getElementById("ANSRTXT1").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX19Xwi4DXP/3AWhZfF5yLg+xsHORk5nXIxjdcf+rYCyA4vbdik1W1izw", gameStatus).toString(CryptoJS.enc.Utf8) + String(tileLocations[0]) + ',' + String(tileLocations[3]) + '.';
        document.getElementById("ANSRTXT2").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX18ziWT+OzLNsFlMJ05/yMEC73NzTSDrTn2rpF4AqR8ln1M0nEfQU5yrPAYRykWVGcCv1xyRXJuVpAkrJHywTavL/hzRBvz/wsT/wFdev7/srDVBGRY0FE8OkC/fo5y5g7J3OB0No0ojOg==", gameStatus).toString(CryptoJS.enc.Utf8);
        document.getElementById("ANSRTXT3").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX1+y52d8wweFuMDDLYfVN9tJDPAThusVQqy94gbM7Cn4oBBXjLKIN5IB", gameStatus).toString(CryptoJS.enc.Utf8) + String(tileLocations[1]) + ',' + String(tileLocations[2]) + '.';
        document.getElementById("ANSRTXT4").innerHTML = CryptoJS.AES.decrypt("U2FsdGVkX1+o3msxsuvMeIBLxSe01y2S3bHqgV5Nly26MkyMxlpPU43kvXv20BTg/mnhmpegpo3VLxBo4FcdNY9sjBw0/23DmH3d42rp8pYiusc/aa7E27rRIANtbR+UWfbiULqPsybsUO/5uf/zSQ==", gameStatus).toString(CryptoJS.enc.Utf8);
        $('div#AnswerPopUp1').show();
        playerQuestionAnswersString = playerQuestionAnswersString.concat("!Role:2,Level:4");
        currentLevelNo = 100;
        clearInterval(timerInterval);
        if (questionTile1Selected) {
            playerScoreInLevel = playerScoreInLevel + 2;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:1");
            UserStoredSkillsValue = UserStoredSkillsValue + userStoredOffset;
            UserReflectedSkillsValue = UserReflectedSkillsValue + userRefOffset;
            UserDOMBasedSkillsValue = UserDOMBasedSkillsValue + userDOMOffset;
            OverallDOMBasedSkillsValue = OverallDOMBasedSkillsValue + overallDOMOffset;
            OverallReflectedSkillsValue = OverallReflectedSkillsValue + overallRefOffset;
            OverallStoredSkillsValue = OverallStoredSkillsValue + overallStoredOffset;

            correctUserAnswersList.push("R2L4Q1A1");
            if (!suggestedRoleList.includes("User")) {
                suggestedRoleList.push("User");
            }
        }

        if (questionTile4Selected) {
            playerScoreInLevel = playerScoreInLevel + 2;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:4");
            UserStoredSkillsValue = UserStoredSkillsValue + userStoredOffset;
            UserReflectedSkillsValue = UserReflectedSkillsValue + userRefOffset;
            UserDOMBasedSkillsValue = UserDOMBasedSkillsValue + userDOMOffset;
            OverallDOMBasedSkillsValue = OverallDOMBasedSkillsValue + overallDOMOffset;
            OverallReflectedSkillsValue = OverallReflectedSkillsValue + overallRefOffset;
            OverallStoredSkillsValue = OverallStoredSkillsValue + overallStoredOffset;

            correctUserAnswersList.push("R2L4Q1A4");
            if (!suggestedRoleList.includes("User")) {
                suggestedRoleList.push("User");
            }
        }

        if (questionTile2Selected) {
            playerScoreInLevel = playerScoreInLevel - 1;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:2");
            incorrectUserAnswersList.push("R2L4Q1A2");
            UserDOMBasedSkillsValue = UserDOMBasedSkillsValue - 2;
            UserReflectedSkillsValue = UserReflectedSkillsValue - 2;
            UserStoredSkillsValue = UserStoredSkillsValue - 2;

            if (UserDOMBasedSkillsValue < 0) {
                UserDOMBasedSkillsValue = 0;
            }

            if (UserReflectedSkillsValue < 0) {
                UserReflectedSkillsValue = 0;
            }

            if (UserStoredSkillsValue < 0) {
                UserStoredSkillsValue = 0;
            }


            OverallReflectedSkillsValue = OverallReflectedSkillsValue - 2;
            OverallStoredSkillsValue = OverallStoredSkillsValue - 2;
            OverallDOMBasedSkillsValue = OverallDOMBasedSkillsValue - 2;

            if (OverallReflectedSkillsValue < 0) {
                OverallReflectedSkillsValue = 0;
            }

            if (OverallStoredSkillsValue < 0) {
                OverallStoredSkillsValue = 0;
            }


            if (OverallDOMBasedSkillsValue < 0) {
                OverallDOMBasedSkillsValue = 0;
            }

            if (!suggestedRoleList.includes("User")) {
                suggestedRoleList.push("User");
            }
        }

        if (questionTile3Selected) {
            playerScoreInLevel = playerScoreInLevel - 1;
            playerQuestionAnswersString = playerQuestionAnswersString.concat("#Q1:3");
            incorrectUserAnswersList.push("R2L4Q1A3");
            UserDOMBasedSkillsValue = UserDOMBasedSkillsValue - 2;
            UserReflectedSkillsValue = UserReflectedSkillsValue - 2;
            UserStoredSkillsValue = UserStoredSkillsValue - 2;

            if (UserDOMBasedSkillsValue < 0) {
                UserDOMBasedSkillsValue = 0;
            }

            if (UserReflectedSkillsValue < 0) {
                UserReflectedSkillsValue = 0;
            }

            if (UserStoredSkillsValue < 0) {
                UserStoredSkillsValue = 0;
            }

            OverallReflectedSkillsValue = OverallReflectedSkillsValue - 2;
            OverallStoredSkillsValue = OverallStoredSkillsValue - 2;
            OverallDOMBasedSkillsValue = OverallDOMBasedSkillsValue - 2;

            if (OverallReflectedSkillsValue < 0) {
                OverallReflectedSkillsValue = 0;
            }

            if (OverallStoredSkillsValue < 0) {
                OverallStoredSkillsValue = 0;
            }


            if (OverallDOMBasedSkillsValue < 0) {
                OverallDOMBasedSkillsValue = 0;
            }

            if (!suggestedRoleList.includes("User")) {
                suggestedRoleList.push("User");
            }
        }

        if (questionTile1Selected && questionTile2Selected && questionTile3Selected && questionTile4Selected) {
            playerScoreInLevel = 0;
        }

        if (playerScoreInLevel < 0) {
            playerScoreInLevel = 0;
        }

        playerScore.textContent = Number(playerScore.textContent) + playerScoreInLevel;
        playerScoreInLevel = 0;
        document.getElementById("Ref-XSS-Skills-Value").innerText = Math.ceil(OverallReflectedSkillsValue);
        document.getElementById("video-progress-Ref-XSS").value = Math.ceil(OverallReflectedSkillsValue);
        document.getElementById("Stored-XSS-Skills-Value").innerText = Math.ceil(OverallStoredSkillsValue);
        document.getElementById("video-progress-Stored-XSS").value = Math.ceil(OverallStoredSkillsValue);
        document.getElementById("DOM-based-XSS-Skills-Value").innerText = Math.ceil(OverallDOMBasedSkillsValue);
        document.getElementById("video-progress-DOM-based-XSS").value = Math.ceil(OverallDOMBasedSkillsValue);
        SimZoneSkills1AddedtoBar = false;
        SimZoneSkills2AddedtoBar = false;

        levelsCompleted.push("R2L4");

        completionTime = timeLimitInSeconds;
        rolesPlayed.push("User");
        LastPlayedRole = "User";



    }




}

function closeQuestionAnswerPopUp() {
    $('div#AnswerPopUp1').hide();
    showLevel();
}

function emptyAnswerErrorPopUpInfo() {
    $('div#emptyAnswerErrorPopUp1').hide();
}


function startLevelInteractivity(buttonID) {

    if (playMusic == true) {
        document.getElementById('buttonSelectSound').play();
    }
    closeTimer();
    if (!initialSimulatorZoneTimerStarted) {
        startSimulatorZoneTimer();
        initialSimulatorZoneTimerStarted = true;
    }

    $('div#interactivityZonePopUp1').show();



    if ((roleId == 0 && (currentLevelNo == 1 || currentLevelNo == 200)) || ((roleId == 0 && currentLevelNo == 1 && buttonID == 100) && (insideSimulatorAction1 || insideSimulatorAction2))) {

        const questionImage1ContainerSimulatorZoneVariable = document.getElementById("questionImageContainerSimulatorZone1");
        const circleInteractiveButton1Variable = document.getElementById("circleInteractiveButton1");
        const circleInteractiveButton2Variable = document.getElementById("circleInteractiveButton2");
        const InteractivityArrowRightVariable = document.getElementById("InteractivityArrowRight");
        const InteractivityArrowLeftVariable = document.getElementById("InteractivityArrowLeft");
        const circleInteractiveText1Variable = document.getElementById("circleInteractiveText1");
        const circleInteractiveText2Variable = document.getElementById("circleInteractiveText2");
        const simulatorInteractiveText1Variable = document.getElementById("simulatorInteractiveText1");

        questionImage1ContainerSimulatorZoneVariable.setAttribute("style", "position:fixed;top:25%;left:20%;width:50%;height:40%;z-index: 0;visibility: visible;");
        circleInteractiveButton1Variable.setAttribute("style", "position:fixed;top:45%;left:5%;width:25%;height:50%;");
        circleInteractiveButton2Variable.setAttribute("style", "position:fixed;top:34%;left:45%;width:25%;height:50%;");
        InteractivityArrowRightVariable.setAttribute("style", "position:fixed;top:-1%;left:5%;");
        InteractivityArrowLeftVariable.setAttribute("style", "position:fixed;top:-11%;left:32%;");
        circleInteractiveText1Variable.setAttribute("style", "margin-top: 35%;font-size: 2vw;");
        circleInteractiveText2Variable.setAttribute("style", "margin-top: 35%;font-size: 2vw;");
        simulatorInteractiveText1Variable.setAttribute("style", "position:fixed;top:87%;left:25%;width:auto;font-size: 2vw;");

        document.getElementById("circleInteractiveText1").innerHTML = "Simulator Action 1";
        document.getElementById("circleInteractiveText2").innerHTML = "Simulator Action 2";
        document.getElementById("questionImageContainerSimulatorZone1").src = "images/simulation_zone/Sim-Zone-Image.png";

        document.getElementById('simulatorInteractiveText1').style.backgroundColor = "#FF7F11";
        document.getElementById('simulatorInteractiveText1').innerHTML = "The above two actions can be performed in the simulator.";
        document.getElementById("XSSCheckBoxAttackerReflected").value = "";

        document.getElementById('circleInteractiveButton1').style.visibility = "visible";
        document.getElementById('circleInteractiveButton2').style.visibility = "visible";
        document.getElementById('InteractivityArrowRight').style.visibility = "visible";
        document.getElementById('InteractivityArrowLeft').style.visibility = "visible";
        document.getElementById('InteractivityBackButton1').style.visibility = "hidden";
        document.getElementById('circleInteractiveText1').style.visibility = "visible";
        document.getElementById('circleInteractiveText2').style.visibility = "visible";
        document.getElementById('simulatorInteractiveText1').style.visibility = "visible";
        document.getElementById('simulatorInteractiveText2').style.visibility = "hidden";
        document.getElementById('XSSCheckBoxAttackerReflected').style.visibility = "hidden";
        document.getElementById('CheckButtonXSSAttackerReflected').style.visibility = "hidden";
        document.getElementById('sanitizedText').style.visibility = "hidden";

        insideSimulatorAction1 = false;
        insideSimulatorAction2 = false;

        var addedToSZArray = false;
        if (!addedToSZArray && !simulatorZoneAnswersArray.includes("!Role:0,Level:1")) {
            simulatorZoneAnswersArray.push("!Role:0,Level:1");
            simulatorZoneAnswersString = simulatorZoneAnswersString.concat("!Role:0,Level:1");
            addedToSZArray = true;
        }

        if (buttonID == 1) {



            document.getElementById('circleInteractiveButton1').style.visibility = "hidden";
            document.getElementById('circleInteractiveButton2').style.visibility = "hidden";
            document.getElementById('XSSCheckBoxAttackerReflected').style.visibility = "hidden";
            document.getElementById('CheckButtonXSSAttackerReflected').style.visibility = "hidden";
            document.getElementById('InteractivityArrowRight').style.visibility = "hidden";
            document.getElementById('InteractivityArrowLeft').style.visibility = "hidden";
            document.getElementById('circleInteractiveText1').style.visibility = "hidden";
            document.getElementById('circleInteractiveText2').style.visibility = "hidden";
            document.getElementById('InteractivityBackButton1').style.visibility = "visible";
            document.getElementById('simulatorInteractiveText2').style.visibility = "hidden";
            const simulatorInteractiveText1Variable = document.getElementById("simulatorInteractiveText1");

            const questionImage1ContainerSimulatorZoneVariable = document.getElementById("questionImageContainerSimulatorZone1");
            document.getElementById("questionImageContainerSimulatorZone1").src = "images/simulation_zone/Sim-Zone-Image.png";
            questionImage1ContainerSimulatorZoneVariable.setAttribute("style", "position:fixed;top:25%;left:20%;width:50%;height:40%;z-index: 0;visibility: visible;");
            document.getElementById('simulatorInteractiveText1').style.visibility = "visible";
            simulatorInteractiveText1Variable.setAttribute("style", "position:fixed;top:82%;left:30%;width:auto;font-size: 2vw;");
            document.getElementById('simulatorInteractiveText1').style.backgroundColor = "#5e3c58";
            document.getElementById('simulatorInteractiveText1').innerHTML = "Add Simulation Action text here.";
            insideSimulatorAction1 = true;
            if (!SimZoneSkills1AddedtoBar) {

                AttackerSimZoneSkillsValue = AttackerSimZoneSkillsValue + attackerSimZoneOffset;
                OverallSimZoneSkillsValue = OverallSimZoneSkillsValue + overallSimZoneOffset;
                SimZoneSkills1AddedtoBar = true;
            }



            var addedToSZArray = false;
            if (!addedToSZArray && !simulatorZoneAnswersArray.includes("#Role:0,Level:1,buttonID:1#")) {
                simulatorZoneAnswersArray.push("#Role:0,Level:1,buttonID:1#");
                simulatorZoneAnswersString = simulatorZoneAnswersString.concat("#buttonID:1#");
                addedToSZArray = true;
            }
        } else if (buttonID == 2) {


            document.getElementById('circleInteractiveButton1').style.visibility = "hidden";
            document.getElementById('circleInteractiveButton2').style.visibility = "hidden";
            document.getElementById('XSSCheckBoxAttackerReflected').style.visibility = "hidden";
            document.getElementById('CheckButtonXSSAttackerReflected').style.visibility = "hidden";
            document.getElementById('InteractivityArrowRight').style.visibility = "hidden";
            document.getElementById('InteractivityArrowLeft').style.visibility = "hidden";
            document.getElementById('circleInteractiveText1').style.visibility = "hidden";
            document.getElementById('circleInteractiveText2').style.visibility = "hidden";
            document.getElementById('InteractivityBackButton1').style.visibility = "visible";
            document.getElementById('simulatorInteractiveText2').style.visibility = "hidden";
            const simulatorInteractiveText1Variable = document.getElementById("simulatorInteractiveText1");

            const questionImage1ContainerSimulatorZoneVariable = document.getElementById("questionImageContainerSimulatorZone1");
            document.getElementById("questionImageContainerSimulatorZone1").src = "images/simulation_zone/Sim-Zone-Image.png";
            questionImage1ContainerSimulatorZoneVariable.setAttribute("style", "position:fixed;top:25%;left:20%;width:50%;height:40%;z-index: 0;visibility: visible;");
            document.getElementById('simulatorInteractiveText1').style.visibility = "visible";

            simulatorInteractiveText1Variable.setAttribute("style", "position:fixed;top:82%;left:30%;width:auto;font-size: 2vw;");
            document.getElementById('simulatorInteractiveText1').style.backgroundColor = "#435274";
            document.getElementById('CheckButtonXSSAttackerReflected').innerHTML = "Check";
            document.getElementById('simulatorInteractiveText1').innerHTML = "Add Simulation Action text here.";
            insideSimulatorAction2 = true;


            var addedToSZArray = false;
            if (!addedToSZArray && !simulatorZoneAnswersArray.includes("#Role:0,Level:1,buttonID:2#")) {
                simulatorZoneAnswersArray.push("#Role:0,Level:1,buttonID:2#");
                simulatorZoneAnswersString = simulatorZoneAnswersString.concat("#buttonID:2#");
                addedToSZArray = true;
            }

        }

    } else if ((roleId == 0 && (currentLevelNo == 2 || currentLevelNo == 200)) || ((roleId == 0 && currentLevelNo == 2 && buttonID == 100) && (insideSimulatorAction1 || insideSimulatorAction2))) {

        const questionImage1ContainerSimulatorZoneVariable = document.getElementById("questionImageContainerSimulatorZone1");

        const circleInteractiveButton2Variable = document.getElementById("circleInteractiveButton2");
        const InteractivityArrowLeftVariable = document.getElementById("InteractivityArrowLeft");
        const simulatorInteractiveText1Variable = document.getElementById("simulatorInteractiveText1");
        const simulatorInteractiveText2Variable = document.getElementById("simulatorInteractiveText2");
        const circleInteractiveText2Variable = document.getElementById("circleInteractiveText2");
        questionImage1ContainerSimulatorZoneVariable.setAttribute("style", "position:fixed;top:25%;left:20%;width:50%;height:40%;z-index: 0;visibility: visible;");

        circleInteractiveButton2Variable.setAttribute("style", "position:fixed;top:30%;left:59%;background-color: #435274;width:25%;height:50%;");
        InteractivityArrowLeftVariable.setAttribute("style", "position:fixed;top:-5%;left:40%;");
        simulatorInteractiveText1Variable.setAttribute("style", "position:fixed;top:82%;left:30%;width:auto;font-size: 2vw;");
        simulatorInteractiveText2Variable.setAttribute("style", "position:fixed;top:25%;left:33.5%;width: 18%;font-size:1.4vw;");

        circleInteractiveText2Variable.setAttribute("style", "margin-top: 35%;font-size: 2vw;");
        document.getElementById("circleInteractiveText2").innerHTML = "Simulator Action 1";

        document.getElementById("questionImageContainerSimulatorZone1").src = "images/simulation_zone/Sim-Zone-Image.png";

        document.getElementById('circleInteractiveButton1').style.visibility = "hidden";
        document.getElementById('circleInteractiveButton2').style.visibility = "visible";
        document.getElementById('InteractivityArrowRight').style.visibility = "hidden";
        document.getElementById('InteractivityArrowLeft').style.visibility = "visible";
        document.getElementById('InteractivityBackButton1').style.visibility = "hidden";
        document.getElementById('circleInteractiveText1').style.visibility = "hidden";
        document.getElementById('circleInteractiveText2').style.visibility = "visible";
        document.getElementById('simulatorInteractiveText1').style.visibility = "visible";
        document.getElementById('simulatorInteractiveText2').style.visibility = "visible";
        document.getElementById('sanitizedText').style.visibility = "hidden";

        document.getElementById('simulatorInteractiveText1').innerHTML = "The above action can be performed in the simulator.";
      

        insideSimulatorAction1 = false;
        insideSimulatorAction2 = false;

        var addedToSZArray = false;
        if (!addedToSZArray && !simulatorZoneAnswersArray.includes("!Role:0,Level:2")) {
            simulatorZoneAnswersArray.push("!Role:0,Level:2");
            simulatorZoneAnswersString = simulatorZoneAnswersString.concat("!Role:0,Level:2");
            addedToSZArray = true;
        }

        if (buttonID == 2) {


            document.getElementById('circleInteractiveButton1').style.visibility = "hidden";
            document.getElementById('circleInteractiveButton2').style.visibility = "hidden";
            document.getElementById('InteractivityArrowRight').style.visibility = "hidden";
            document.getElementById('InteractivityArrowLeft').style.visibility = "hidden";
            document.getElementById('circleInteractiveText1').style.visibility = "hidden";
            document.getElementById('circleInteractiveText2').style.visibility = "hidden";
            document.getElementById('InteractivityBackButton1').style.visibility = "visible";


            const questionImage1ContainerSimulatorZoneVariable = document.getElementById("questionImageContainerSimulatorZone1");
            document.getElementById("questionImageContainerSimulatorZone1").src = "images/simulation_zone/Sim-Zone-Image.png";
            questionImage1ContainerSimulatorZoneVariable.setAttribute("style", "position:fixed;top:25%;left:20%;width:50%;height:40%;z-index: 0;visibility: visible;");
            simulatorInteractiveText1Variable.setAttribute("style", "position:fixed;top:82%;left:30%;background-color: #435274;width:auto;font-size: 2vw;");

            document.getElementById('simulatorInteractiveText1').style.visibility = "visible";
            document.getElementById('simulatorInteractiveText2').style.visibility = "hidden";
            document.getElementById('simulatorInteractiveText1').style.backgroundColor = "#435274";
            document.getElementById('simulatorInteractiveText1').innerHTML = "Add Simulation Action text here.";
            insideSimulatorAction2 = true;

            if (!SimZoneSkills2AddedtoBar) {
                AttackerSimZoneSkillsValue = AttackerSimZoneSkillsValue + attackerSimZoneOffset;
                OverallSimZoneSkillsValue = OverallSimZoneSkillsValue + overallSimZoneOffset;
                SimZoneSkills2AddedtoBar = true;

            }

            var addedToSZArray = false;
            if (!addedToSZArray && !simulatorZoneAnswersArray.includes("#Role:0,Level:2,buttonID:2#")) {
                simulatorZoneAnswersArray.push("#Role:0,Level:2,buttonID:2#");
                simulatorZoneAnswersString = simulatorZoneAnswersString.concat("#buttonID:2#");
                addedToSZArray = true;
            }
        }
    } else if ((roleId == 0 && (currentLevelNo == 3 || currentLevelNo == 200)) || ((roleId == 0 && currentLevelNo == 3 && buttonID == 100) && (insideSimulatorAction1 || insideSimulatorAction2))) {

        const questionImage1ContainerSimulatorZoneVariable = document.getElementById("questionImageContainerSimulatorZone1");
        const circleInteractiveButton1Variable = document.getElementById("circleInteractiveButton1");
        const circleInteractiveButton2Variable = document.getElementById("circleInteractiveButton2");
        const InteractivityArrowRightVariable = document.getElementById("InteractivityArrowRight");
        const InteractivityArrowLeftVariable = document.getElementById("InteractivityArrowLeft");
        const simulatorInteractiveText1Variable = document.getElementById("simulatorInteractiveText1");
        const circleInteractiveText1Variable = document.getElementById("circleInteractiveText1");
        const circleInteractiveText2Variable = document.getElementById("circleInteractiveText2");
        const simulatorInteractiveText2Variable = document.getElementById("simulatorInteractiveText2");

        questionImage1ContainerSimulatorZoneVariable.setAttribute("style", "position:fixed;top:25%;left:20%;width:50%;height:40%;z-index: 0;visibility: visible;");

        circleInteractiveButton1Variable.setAttribute("style", "position:fixed;top:30%;left:3%;width:25%;height:50%;");
        circleInteractiveButton2Variable.setAttribute("style", "position:fixed;top:30%;left:71%;width:25%;height:50%;");
        InteractivityArrowRightVariable.setAttribute("style", "position:fixed;top:-2%;left:12%;");
        InteractivityArrowLeftVariable.setAttribute("style", "position:fixed;top:-2%;left:55%;");
        simulatorInteractiveText1Variable.setAttribute("style", "position:fixed;top:82%;left:30%;background-color: #FF7F11;width:auto;font-size: 2vw;");
        simulatorInteractiveText2Variable.setAttribute("style", "position:fixed;top:27%;left:33.7%;width: 32.5%;font-size: 1.3vw;");
        circleInteractiveText1Variable.setAttribute("style", "margin-top: 35%;font-size: 2vw;");
        circleInteractiveText2Variable.setAttribute("style", "margin-top: 35%;font-size: 2vw;");

        document.getElementById("circleInteractiveText1").innerHTML = "Simulator Action 1";
        document.getElementById("circleInteractiveText2").innerHTML = "Simulator Action 2";

        document.getElementById("questionImageContainerSimulatorZone1").src = "images/simulation_zone/Sim-Zone-Image.png";

        document.getElementById('circleInteractiveButton1').style.visibility = "visible";
        document.getElementById('circleInteractiveButton2').style.visibility = "visible";
        document.getElementById('InteractivityArrowRight').style.visibility = "visible";
        document.getElementById('InteractivityArrowLeft').style.visibility = "visible";
        document.getElementById('InteractivityBackButton1').style.visibility = "hidden";
        document.getElementById('circleInteractiveText1').style.visibility = "visible";
        document.getElementById('circleInteractiveText2').style.visibility = "visible";
        document.getElementById('simulatorInteractiveText1').style.visibility = "visible";
        document.getElementById('simulatorInteractiveText2').style.visibility = "visible";
        document.getElementById('questionImageContainerSimulatorZone2').style.visibility = "hidden";
        document.getElementById('sanitizedText').style.visibility = "hidden";

        document.getElementById('simulatorInteractiveText1').innerHTML = "The above two actions can be performed in the simulator.";

        

        insideSimulatorAction1 = false;
        insideSimulatorAction2 = false;

        var addedToSZArray = false;
        if (!addedToSZArray && !simulatorZoneAnswersArray.includes("!Role:0,Level:3")) {
            simulatorZoneAnswersArray.push("!Role:0,Level:3");
            simulatorZoneAnswersString = simulatorZoneAnswersString.concat("!Role:0,Level:3");
            addedToSZArray = true;
        }


        if (buttonID == 1) {


            document.getElementById('circleInteractiveText1').style.visibility = "hidden";
            document.getElementById('circleInteractiveButton1').style.visibility = "hidden";
            document.getElementById('circleInteractiveText2').style.visibility = "hidden";
            document.getElementById('circleInteractiveButton2').style.visibility = "hidden";
            document.getElementById('InteractivityArrowRight').style.visibility = "hidden";
            document.getElementById('InteractivityArrowLeft').style.visibility = "hidden";
            document.getElementById('InteractivityBackButton1').style.visibility = "visible";



            const questionImage1ContainerSimulatorZoneVariable = document.getElementById("questionImageContainerSimulatorZone1");
            document.getElementById("questionImageContainerSimulatorZone1").src = "images/simulation_zone/Sim-Zone-Image.png";
            questionImage1ContainerSimulatorZoneVariable.setAttribute("style", "position:fixed;top:25%;left:20%;width:50%;height:40%;z-index: 0;visibility: visible;");

            document.getElementById('simulatorInteractiveText1').style.visibility = "visible";
            document.getElementById('simulatorInteractiveText2').style.visibility = "hidden";
            document.getElementById('simulatorInteractiveText1').style.backgroundColor = "#5e3c58";
            document.getElementById('simulatorInteractiveText1').innerHTML = "Add Simulation Action text here.";
            insideSimulatorAction1 = true;

            if (!SimZoneSkills1AddedtoBar) {
                AttackerSimZoneSkillsValue = AttackerSimZoneSkillsValue + attackerSimZoneOffset;
                OverallSimZoneSkillsValue = OverallSimZoneSkillsValue + overallSimZoneOffset;
                SimZoneSkills1AddedtoBar = true;

            }

            var addedToSZArray = false;
            if (!addedToSZArray && !simulatorZoneAnswersArray.includes("#Role:0,Level:3,buttonID:1#")) {
                simulatorZoneAnswersArray.push("#Role:0,Level:3,buttonID:1#");
                simulatorZoneAnswersString = simulatorZoneAnswersString.concat("#buttonID:1#");
                addedToSZArray = true;
            }

        } else if (buttonID == 2) {

            document.getElementById('circleInteractiveText1').style.visibility = "hidden";
            document.getElementById('circleInteractiveButton1').style.visibility = "hidden";
            document.getElementById('circleInteractiveText2').style.visibility = "hidden";
            document.getElementById('circleInteractiveButton2').style.visibility = "hidden";

            document.getElementById('InteractivityArrowRight').style.visibility = "hidden";
            document.getElementById('InteractivityArrowLeft').style.visibility = "hidden";
            document.getElementById('InteractivityBackButton1').style.visibility = "visible";

            const simulatorInteractiveText2Variable = document.getElementById("simulatorInteractiveText2");


            const questionImage1ContainerSimulatorZoneVariable = document.getElementById("questionImageContainerSimulatorZone1");
            document.getElementById("questionImageContainerSimulatorZone1").src = "images/simulation_zone/Sim-Zone-Image.png";
            const questionImage2ContainerSimulatorZoneVariable = document.getElementById("questionImageContainerSimulatorZone2");
            

            questionImage1ContainerSimulatorZoneVariable.setAttribute("style", "position:fixed;top:25%;left:20%;width:50%;height:40%;z-index: 0;visibility: visible;");
            questionImage2ContainerSimulatorZoneVariable.setAttribute("style", "position:fixed;height:49%;width:46%;top:19%;left:17%;visibility: hidden;");

            simulatorInteractiveText2Variable.setAttribute("style", "position:fixed;top:25%;left:62%;width: 30%;font-size: 2vw;");

            document.getElementById('simulatorInteractiveText1').style.visibility = "visible";
            document.getElementById('simulatorInteractiveText2').style.visibility = "hidden";
            document.getElementById('simulatorInteractiveText1').style.backgroundColor = "#435274";
            document.getElementById('simulatorInteractiveText1').style.top = "85%";
            document.getElementById('simulatorInteractiveText1').innerHTML = "Add Simulation Action text here.";
            
            insideSimulatorAction2 = true;

            if (!SimZoneSkills2AddedtoBar) {
                AttackerSimZoneSkillsValue = AttackerSimZoneSkillsValue + attackerSimZoneOffset;
                OverallSimZoneSkillsValue = OverallSimZoneSkillsValue + overallSimZoneOffset;
                SimZoneSkills2AddedtoBar = true;

            }

            var addedToSZArray = false;
            if (!addedToSZArray && !simulatorZoneAnswersArray.includes("#Role:0,Level:3,buttonID:2#")) {
                simulatorZoneAnswersArray.push("#Role:0,Level:3,buttonID:2#");
                simulatorZoneAnswersString = simulatorZoneAnswersString.concat("#buttonID:2#");
                addedToSZArray = true;
            }

        }
    } else if ((roleId == 0 && (currentLevelNo == 4 || currentLevelNo == 200)) || ((roleId == 0 && currentLevelNo == 4 && buttonID == 100) && (insideSimulatorAction1 || insideSimulatorAction2))) {

        const questionImage1ContainerSimulatorZoneVariable = document.getElementById("questionImageContainerSimulatorZone1");
        const circleInteractiveButton1Variable = document.getElementById("circleInteractiveButton1");
        const circleInteractiveButton2Variable = document.getElementById("circleInteractiveButton2");
        const InteractivityArrowRightVariable = document.getElementById("InteractivityArrowRight");
        const InteractivityArrowLeftVariable = document.getElementById("InteractivityArrowLeft");
        const simulatorInteractiveText1Variable = document.getElementById("simulatorInteractiveText1");
        const circleInteractiveText1Variable = document.getElementById("circleInteractiveText1");
        const circleInteractiveText2Variable = document.getElementById("circleInteractiveText2");
        const simulatorInteractiveText2Variable = document.getElementById("simulatorInteractiveText2");

        questionImage1ContainerSimulatorZoneVariable.setAttribute("style", "position:fixed;top:25%;left:20%;width:50%;height:40%;z-index: 0;visibility: visible;");

        circleInteractiveButton1Variable.setAttribute("style", "position:fixed;top:35%;left:30%;width:25%;height:50%;");
        circleInteractiveButton2Variable.setAttribute("style", "position:fixed;top:35%;left:71%;width:25%;height:50%;");
        InteractivityArrowRightVariable.setAttribute("style", "position:fixed;top:-4%;left:39%;");
        InteractivityArrowLeftVariable.setAttribute("style", "position:fixed;top:3%;left:51%;");

        simulatorInteractiveText2Variable.setAttribute("style", "position:fixed;top:25%;left:34%;width: 50%;font-size: 2vw;");
        circleInteractiveText1Variable.setAttribute("style", "margin-top: 35%;font-size: 2vw;");
        circleInteractiveText2Variable.setAttribute("style", "margin-top: 35%;font-size: 2vw;");

        document.getElementById("circleInteractiveText1").innerHTML = "Simulator Action 1";
        document.getElementById("circleInteractiveText2").innerHTML = "Simulator Action 2";

        document.getElementById("questionImageContainerSimulatorZone1").src = "images/simulation_zone/Sim-Zone-Image.png";

        document.getElementById('XSSCheckBoxAttackerReflected').style.visibility = "hidden";
        document.getElementById('CheckButtonXSSAttackerReflected').style.visibility = "hidden";
        document.getElementById('circleInteractiveButton1').style.visibility = "visible";
        document.getElementById('circleInteractiveButton2').style.visibility = "visible";
        document.getElementById('InteractivityArrowRight').style.visibility = "visible";
        document.getElementById('InteractivityArrowLeft').style.visibility = "visible";
        document.getElementById('InteractivityBackButton1').style.visibility = "hidden";
        document.getElementById('circleInteractiveText1').style.visibility = "visible";
        document.getElementById('circleInteractiveText2').style.visibility = "visible";
        document.getElementById('simulatorInteractiveText1').style.visibility = "visible";
        document.getElementById('simulatorInteractiveText2').style.visibility = "hidden";
        document.getElementById('questionImageContainerSimulatorZone2').style.visibility = "hidden";
        document.getElementById('sanitizedText').style.visibility = "hidden";

        simulatorInteractiveText1Variable.setAttribute("style", "position:fixed;top:82%;left:30%;width:auto;font-size: 2vw;background-color: #FF7F11;");
        document.getElementById('simulatorInteractiveText1').innerHTML = "The above two actions can be performed in the simulator.";
        document.getElementById('simulatorInteractiveText1').style.visibility = "visible";

        insideSimulatorAction1 = false;
        insideSimulatorAction2 = false;
        XSSAlertScriptSubmitted = false;
        document.getElementById("XSSCheckBoxAttackerReflected").value = "";

        var addedToSZArray = false;
        if (!addedToSZArray && !simulatorZoneAnswersArray.includes("!Role:0,Level:4")) {
            simulatorZoneAnswersArray.push("!Role:0,Level:4");
            simulatorZoneAnswersString = simulatorZoneAnswersString.concat("!Role:0,Level:4");
            addedToSZArray = true;
        }


        if (buttonID == 1) {


            document.getElementById('circleInteractiveText1').style.visibility = "hidden";
            document.getElementById('circleInteractiveButton1').style.visibility = "hidden";
            document.getElementById('circleInteractiveText2').style.visibility = "hidden";
            document.getElementById('circleInteractiveButton2').style.visibility = "hidden";
            document.getElementById('InteractivityArrowRight').style.visibility = "hidden";
            document.getElementById('InteractivityArrowLeft').style.visibility = "hidden";
            document.getElementById('InteractivityBackButton1').style.visibility = "visible";



            const questionImage1ContainerSimulatorZoneVariable = document.getElementById("questionImageContainerSimulatorZone1");
            const simulatorInteractiveText1Variable = document.getElementById("simulatorInteractiveText1");
            document.getElementById("questionImageContainerSimulatorZone1").src = "images/simulation_zone/Sim-Zone-Image.png";
            questionImage1ContainerSimulatorZoneVariable.setAttribute("style", "position:fixed;top:25%;left:20%;width:50%;height:40%;z-index: 0;visibility: visible;");
            simulatorInteractiveText1Variable.setAttribute("style", "position:fixed;top:82%;left:30%;width:auto;font-size: 2vw;");

            document.getElementById('XSSCheckBoxAttackerReflected').style.visibility = "hidden";
            document.getElementById('CheckButtonXSSAttackerReflected').style.visibility = "hidden";
            document.getElementById('simulatorInteractiveText1').style.visibility = "visible";
            document.getElementById('simulatorInteractiveText2').style.visibility = "hidden";
            document.getElementById('simulatorInteractiveText1').style.backgroundColor = "#5e3c58";
            document.getElementById('simulatorInteractiveText1').innerHTML = "Add Simulation Action text here.";
            insideSimulatorAction1 = true;
            XSSAlertScriptSubmitted = false;
            document.getElementById("XSSCheckBoxAttackerReflected").value = "";

            if (!SimZoneSkills1AddedtoBar) {
                AttackerSimZoneSkillsValue = AttackerSimZoneSkillsValue + attackerSimZoneOffset;
                OverallSimZoneSkillsValue = OverallSimZoneSkillsValue + overallSimZoneOffset;
                SimZoneSkills1AddedtoBar = true;
            }

            var addedToSZArray = false;
            if (!addedToSZArray && !simulatorZoneAnswersArray.includes("#Role:0,Level:4,buttonID:1#")) {
                simulatorZoneAnswersArray.push("#Role:0,Level:4,buttonID:1#");
                simulatorZoneAnswersString = simulatorZoneAnswersString.concat("#buttonID:1#");
                addedToSZArray = true;
            }

        } else if (buttonID == 2) {

            document.getElementById('circleInteractiveText1').style.visibility = "hidden";
            document.getElementById('circleInteractiveButton1').style.visibility = "hidden";
            document.getElementById('circleInteractiveText2').style.visibility = "hidden";
            document.getElementById('circleInteractiveButton2').style.visibility = "hidden";

            document.getElementById('InteractivityArrowRight').style.visibility = "hidden";
            document.getElementById('InteractivityArrowLeft').style.visibility = "hidden";
            document.getElementById('InteractivityBackButton1').style.visibility = "visible";

            const simulatorInteractiveText1Variable = document.getElementById("simulatorInteractiveText1");
            const simulatorInteractiveText2Variable = document.getElementById("simulatorInteractiveText2");
            const XSSCheckBoxAttackerReflectedVariable = document.getElementById('XSSCheckBoxAttackerReflected');
            const CheckButtonXSSAttackerReflectedVariable = document.getElementById('CheckButtonXSSAttackerReflected');

            const questionImage1ContainerSimulatorZoneVariable = document.getElementById("questionImageContainerSimulatorZone1");
            document.getElementById("questionImageContainerSimulatorZone1").src = "images/simulation_zone/Sim-Zone-Image.png";

            XSSCheckBoxAttackerReflectedVariable.setAttribute("style", "position:fixed;top:60%;left:15%;");
            CheckButtonXSSAttackerReflectedVariable.setAttribute("style", "position:fixed;top:60%;left:45%;");


            simulatorInteractiveText1Variable.setAttribute("style", "position:fixed;top:82%;left:30%;width:auto;font-size: 2vw;background-color: #F4EDCC;");
            simulatorInteractiveText2Variable.setAttribute("style", "position:fixed;top:35%;left:45%;width: 50%;font-size: 2vw;");

            document.getElementById('XSSCheckBoxAttackerReflected').style.visibility = "hidden";
            document.getElementById('CheckButtonXSSAttackerReflected').style.visibility = "hidden";
            document.getElementById('simulatorInteractiveText1').style.visibility = "visible";
            document.getElementById('simulatorInteractiveText2').style.visibility = "hidden";
            document.getElementById('simulatorInteractiveText1').style.backgroundColor = "#435274";
            document.getElementById('simulatorInteractiveText1').innerHTML = "Add Simulation Action text here.";
            
            document.getElementById('CheckButtonXSSAttackerReflected').innerHTML = "Submit";
            insideSimulatorAction2 = true;
            XSSAlertScriptSubmitted = false;
            document.getElementById("XSSCheckBoxAttackerReflected").value = "";



            var addedToSZArray = false;
            if (!addedToSZArray && !simulatorZoneAnswersArray.includes("#Role:0,Level:4,buttonID:2#")) {
                simulatorZoneAnswersArray.push("#Role:0,Level:4,buttonID:2#");
                simulatorZoneAnswersString = simulatorZoneAnswersString.concat("#buttonID:2#");
                addedToSZArray = true;
            }
        }
    } else if ((roleId == 0 && (currentLevelNo == 5 || currentLevelNo == 200)) || ((roleId == 0 && currentLevelNo == 5 && buttonID == 100) && (insideSimulatorAction1 || insideSimulatorAction2))) {

        const questionImage1ContainerSimulatorZoneVariable = document.getElementById("questionImageContainerSimulatorZone1");
        const circleInteractiveButton1Variable = document.getElementById("circleInteractiveButton1");
        const circleInteractiveButton2Variable = document.getElementById("circleInteractiveButton2");
        const InteractivityArrowRightVariable = document.getElementById("InteractivityArrowRight");
        const InteractivityArrowLeftVariable = document.getElementById("InteractivityArrowLeft");
        const simulatorInteractiveText1Variable = document.getElementById("simulatorInteractiveText1");
        const circleInteractiveText1Variable = document.getElementById("circleInteractiveText1");
        const circleInteractiveText2Variable = document.getElementById("circleInteractiveText2");
        const simulatorInteractiveText2Variable = document.getElementById("simulatorInteractiveText2");

        questionImage1ContainerSimulatorZoneVariable.setAttribute("style", "position:fixed;top:25%;left:20%;width:50%;height:40%;z-index: 0;visibility: visible;");

        circleInteractiveButton1Variable.setAttribute("style", "position:fixed;top:35%;left:71%;width:25%;height:50%;");
        circleInteractiveButton2Variable.setAttribute("style", "position:fixed;top:35%;left:30%;width:25%;height:50%;");
        InteractivityArrowRightVariable.setAttribute("style", "position:fixed;top:-2%;left:40%;");
        InteractivityArrowLeftVariable.setAttribute("style", "position:fixed;top:3%;left:51%;");

        simulatorInteractiveText2Variable.setAttribute("style", "position:fixed;top:25%;left:34%;width: 50%;font-size: 2vw;");
        circleInteractiveText1Variable.setAttribute("style", "margin-top: 30%;font-size: 2vw;");
        circleInteractiveText2Variable.setAttribute("style", "margin-top: 30%;font-size: 2vw;");

        document.getElementById("circleInteractiveText1").innerHTML = "Simulator Action 1";
        document.getElementById("circleInteractiveText2").innerHTML = "Simulator Action 2";

        document.getElementById("questionImageContainerSimulatorZone1").src = "images/simulation_zone/Sim-Zone-Image.png";

        document.getElementById('circleInteractiveButton1').style.visibility = "visible";
        document.getElementById('circleInteractiveButton2').style.visibility = "visible";
        document.getElementById('InteractivityArrowRight').style.visibility = "visible";
        document.getElementById('InteractivityArrowLeft').style.visibility = "visible";
        document.getElementById('InteractivityBackButton1').style.visibility = "hidden";
        document.getElementById('circleInteractiveText1').style.visibility = "visible";
        document.getElementById('circleInteractiveText2').style.visibility = "visible";
        document.getElementById('simulatorInteractiveText1').style.visibility = "visible";
        document.getElementById('simulatorInteractiveText2').style.visibility = "hidden";
        document.getElementById('questionImageContainerSimulatorZone2').style.visibility = "hidden";
        document.getElementById('sanitizedText').style.visibility = "hidden";

        simulatorInteractiveText1Variable.setAttribute("style", "position:fixed;top:82%;left:30%;width:auto;font-size: 2vw;background-color: #FF7F11;");
        document.getElementById('simulatorInteractiveText1').innerHTML = "The above two actions can be performed in the simulator.";
        document.getElementById('simulatorInteractiveText1').style.visibility = "visible";


        insideSimulatorAction1 = false;
        insideSimulatorAction2 = false;

        var addedToSZArray = false;
        if (!addedToSZArray && !simulatorZoneAnswersArray.includes("!Role:0,Level:5")) {
            simulatorZoneAnswersArray.push("!Role:0,Level:5");
            simulatorZoneAnswersString = simulatorZoneAnswersString.concat("!Role:0,Level:5");
            addedToSZArray = true;
        }


        if (buttonID == 1) {


            document.getElementById('circleInteractiveText1').style.visibility = "hidden";
            document.getElementById('circleInteractiveButton1').style.visibility = "hidden";
            document.getElementById('circleInteractiveText2').style.visibility = "hidden";
            document.getElementById('circleInteractiveButton2').style.visibility = "hidden";
            document.getElementById('InteractivityArrowRight').style.visibility = "hidden";
            document.getElementById('InteractivityArrowLeft').style.visibility = "hidden";
            document.getElementById('InteractivityBackButton1').style.visibility = "visible";



            const questionImage1ContainerSimulatorZoneVariable = document.getElementById("questionImageContainerSimulatorZone1");
            const simulatorInteractiveText1Variable = document.getElementById("simulatorInteractiveText1");
            document.getElementById("questionImageContainerSimulatorZone1").src = "images/simulation_zone/Sim-Zone-Image.png";
            questionImage1ContainerSimulatorZoneVariable.setAttribute("style", "position:fixed;top:25%;left:20%;width:50%;height:40%;z-index: 0;visibility: visible;");
            simulatorInteractiveText1Variable.setAttribute("style", "position:fixed;top:82%;left:30%;width:auto;font-size: 2vw;");

            document.getElementById('simulatorInteractiveText1').style.visibility = "visible";
            document.getElementById('simulatorInteractiveText2').style.visibility = "hidden";
            document.getElementById('simulatorInteractiveText1').style.backgroundColor = "#5e3c58";
            document.getElementById('simulatorInteractiveText1').innerHTML = "Add Simulation Action text here.";
            insideSimulatorAction1 = true;

            if (!SimZoneSkills1AddedtoBar) {
                AttackerSimZoneSkillsValue = AttackerSimZoneSkillsValue + attackerSimZoneOffset;
                OverallSimZoneSkillsValue = OverallSimZoneSkillsValue + overallSimZoneOffset;
                SimZoneSkills1AddedtoBar = true;
            }

            var addedToSZArray = false;
            if (!addedToSZArray && !simulatorZoneAnswersArray.includes("#Role:0,Level:5,buttonID:1#")) {
                simulatorZoneAnswersArray.push("#Role:0,Level:5,buttonID:1#");
                simulatorZoneAnswersString = simulatorZoneAnswersString.concat("#buttonID:1#");
                addedToSZArray = true;
            }

        } else if (buttonID == 2) {


            document.getElementById('circleInteractiveText1').style.visibility = "hidden";
            document.getElementById('circleInteractiveButton1').style.visibility = "hidden";
            document.getElementById('circleInteractiveText2').style.visibility = "hidden";
            document.getElementById('circleInteractiveButton2').style.visibility = "hidden";
            document.getElementById('InteractivityArrowRight').style.visibility = "hidden";
            document.getElementById('InteractivityArrowLeft').style.visibility = "hidden";
            document.getElementById('InteractivityBackButton1').style.visibility = "visible";



            const questionImage1ContainerSimulatorZoneVariable = document.getElementById("questionImageContainerSimulatorZone1");
            const simulatorInteractiveText1Variable = document.getElementById("simulatorInteractiveText1");
            document.getElementById("questionImageContainerSimulatorZone1").src = "images/simulation_zone/Sim-Zone-Image.png";
            questionImage1ContainerSimulatorZoneVariable.setAttribute("style", "position:fixed;top:25%;left:20%;width:50%;height:40%;z-index: 0;visibility: visible;");
            simulatorInteractiveText1Variable.setAttribute("style", "position:fixed;top:82%;left:30%;width:auto;font-size: 2vw;");

            document.getElementById('simulatorInteractiveText1').style.visibility = "visible";
            document.getElementById('simulatorInteractiveText2').style.visibility = "hidden";
            document.getElementById('simulatorInteractiveText1').style.backgroundColor = "#435274";
            document.getElementById('simulatorInteractiveText1').innerHTML = "Add Simulation Action text here.";
            insideSimulatorAction2 = true;

            if (!SimZoneSkills2AddedtoBar) {
                AttackerSimZoneSkillsValue = AttackerSimZoneSkillsValue + attackerSimZoneOffset;
                OverallSimZoneSkillsValue = OverallSimZoneSkillsValue + overallSimZoneOffset;
                SimZoneSkills2AddedtoBar = true;
            }

            var addedToSZArray = false;
            if (!addedToSZArray && !simulatorZoneAnswersArray.includes("#Role:0,Level:5,buttonID:2#")) {
                simulatorZoneAnswersArray.push("#Role:0,Level:5,buttonID:12#");
                simulatorZoneAnswersString = simulatorZoneAnswersString.concat("#buttonID:2#");
                addedToSZArray = true;
            }

        }

    } else if ((roleId == 0 && (currentLevelNo == 7 || currentLevelNo == 200)) || ((roleId == 0 && currentLevelNo == 7 && buttonID == 100) && (insideSimulatorAction1 || insideSimulatorAction2))) {

        const questionImage1ContainerSimulatorZoneVariable = document.getElementById("questionImageContainerSimulatorZone1");
        const circleInteractiveButton1Variable = document.getElementById("circleInteractiveButton1");
        const circleInteractiveButton2Variable = document.getElementById("circleInteractiveButton2");
        const InteractivityArrowRightVariable = document.getElementById("InteractivityArrowRight");
        const InteractivityArrowLeftVariable = document.getElementById("InteractivityArrowLeft");
        const simulatorInteractiveText1Variable = document.getElementById("simulatorInteractiveText1");
        const circleInteractiveText1Variable = document.getElementById("circleInteractiveText1");
        const circleInteractiveText2Variable = document.getElementById("circleInteractiveText2");
        const simulatorInteractiveText2Variable = document.getElementById("simulatorInteractiveText2");

        questionImage1ContainerSimulatorZoneVariable.setAttribute("style", "position:fixed;top:25%;left:20%;width:50%;height:40%;z-index: 0;visibility: visible;");

        circleInteractiveButton1Variable.setAttribute("style", "position:fixed;top:35%;left:71%;width:25%;height:50%;");
        circleInteractiveButton2Variable.setAttribute("style", "position:fixed;top:35%;left:30%;width:25%;height:50%;");
        InteractivityArrowRightVariable.setAttribute("style", "position:fixed;top:-2%;left:40%;");
        InteractivityArrowLeftVariable.setAttribute("style", "position:fixed;top:3%;left:51%;");

        simulatorInteractiveText2Variable.setAttribute("style", "position:fixed;top:25%;left:34%;width: 50%;font-size: 2vw;");
        circleInteractiveText1Variable.setAttribute("style", "margin-top: 30%;font-size: 2vw;");
        circleInteractiveText2Variable.setAttribute("style", "margin-top: 30%;font-size: 2vw;");

        document.getElementById("circleInteractiveText1").innerText = "Simulator Action 1";
        document.getElementById("circleInteractiveText2").innerHTML = "Simulator Action 2";

        document.getElementById("questionImageContainerSimulatorZone1").src = "images/simulation_zone/Sim-Zone-Image.png";

        document.getElementById('circleInteractiveButton1').style.visibility = "visible";
        document.getElementById('circleInteractiveButton2').style.visibility = "visible";
        document.getElementById('InteractivityArrowRight').style.visibility = "visible";
        document.getElementById('InteractivityArrowLeft').style.visibility = "visible";
        document.getElementById('InteractivityBackButton1').style.visibility = "hidden";
        document.getElementById('circleInteractiveText1').style.visibility = "visible";
        document.getElementById('circleInteractiveText2').style.visibility = "visible";
        document.getElementById('simulatorInteractiveText1').style.visibility = "visible";
        document.getElementById('simulatorInteractiveText2').style.visibility = "hidden";
        document.getElementById('questionImageContainerSimulatorZone2').style.visibility = "hidden";
        document.getElementById('XSSCheckBoxAttackerReflected').style.visibility = "hidden";
        document.getElementById('CheckButtonXSSAttackerReflected').style.visibility = "hidden";
        document.getElementById('DOMSimImage').style.visibility = "hidden";
        document.getElementById('sanitizedText').style.visibility = "hidden";

        
        simulatorInteractiveText1Variable.setAttribute("style", "position:fixed;top:82%;left:30%;width:auto;font-size: 2vw;background-color: #FF7F11;");
        document.getElementById('simulatorInteractiveText1').innerHTML = "The above two actions can be performed in the simulator.";
        document.getElementById('simulatorInteractiveText1').style.visibility = "visible";


        insideSimulatorAction1 = false;
        insideSimulatorAction2 = false;

        var addedToSZArray = false;
        if (!addedToSZArray && !simulatorZoneAnswersArray.includes("!Role:0,Level:7")) {
            simulatorZoneAnswersArray.push("!Role:0,Level:7");
            simulatorZoneAnswersString = simulatorZoneAnswersString.concat("!Role:0,Level:7");
            addedToSZArray = true;
        }


        if (buttonID == 1) {


            const XSSCheckBoxAttackerReflectedVariable = document.getElementById("XSSCheckBoxAttackerReflected");
            const CheckButtonXSSAttackerReflectedVariable = document.getElementById("CheckButtonXSSAttackerReflected");

            document.getElementById('circleInteractiveText1').style.visibility = "hidden";
            document.getElementById('circleInteractiveButton1').style.visibility = "hidden";
            document.getElementById('circleInteractiveText2').style.visibility = "hidden";
            document.getElementById('circleInteractiveButton2').style.visibility = "hidden";
            document.getElementById('InteractivityArrowRight').style.visibility = "hidden";
            document.getElementById('InteractivityArrowLeft').style.visibility = "hidden";
            document.getElementById('InteractivityBackButton1').style.visibility = "visible";
            document.getElementById('DOMSimImage').style.visibility = "hidden";


            XSSCheckBoxAttackerReflectedVariable.setAttribute("style", "position:fixed;top:17%;left:38.5%;height:5%;z-index: 1;visibility: hidden;");
            CheckButtonXSSAttackerReflectedVariable.setAttribute("style", "position:fixed;top:30%;left:40%;z-index: 1;visibility: hidden;");

            const questionImage1ContainerSimulatorZoneVariable = document.getElementById("questionImageContainerSimulatorZone1");
            const simulatorInteractiveText1Variable = document.getElementById("simulatorInteractiveText1");
            document.getElementById("questionImageContainerSimulatorZone1").src = "images/simulation_zone/Sim-Zone-Image.png";
            questionImage1ContainerSimulatorZoneVariable.setAttribute("style", "position:fixed;top:25%;left:20%;width:50%;height:40%;z-index: 0;visibility: visible;");
            simulatorInteractiveText1Variable.setAttribute("style", "position:fixed;top:82%;left:30%;width:auto;font-size: 2vw;");

            document.getElementById('simulatorInteractiveText1').style.visibility = "visible";
            document.getElementById('simulatorInteractiveText2').style.visibility = "hidden";
            document.getElementById('simulatorInteractiveText1').style.backgroundColor = "#5e3c58";
            document.getElementById('CheckButtonXSSAttackerReflected').innerHTML = "Check";
            document.getElementById('simulatorInteractiveText1').innerText = "Add Simulation Action text here.";
            insideSimulatorAction1 = true;

            document.getElementById("XSSCheckBoxAttackerReflected").value = "";
            document.getElementById("DOMSimImage").src = "";

            var addedToSZArray = false;
            if (!addedToSZArray && !simulatorZoneAnswersArray.includes("#Role:0,Level:7,buttonID:1#")) {
                simulatorZoneAnswersArray.push("#Role:0,Level:7,buttonID:1#");
                simulatorZoneAnswersString = simulatorZoneAnswersString.concat("#buttonID:1#");
                addedToSZArray = true;
            }

        } else if (buttonID == 2) {

            const XSSCheckBoxAttackerReflectedVariable = document.getElementById("XSSCheckBoxAttackerReflected");
            const CheckButtonXSSAttackerReflectedVariable = document.getElementById("CheckButtonXSSAttackerReflected");

            document.getElementById('circleInteractiveText1').style.visibility = "hidden";
            document.getElementById('circleInteractiveButton1').style.visibility = "hidden";
            document.getElementById('circleInteractiveText2').style.visibility = "hidden";
            document.getElementById('circleInteractiveButton2').style.visibility = "hidden";
            document.getElementById('InteractivityArrowRight').style.visibility = "hidden";
            document.getElementById('InteractivityArrowLeft').style.visibility = "hidden";
            document.getElementById('InteractivityBackButton1').style.visibility = "visible";
            document.getElementById('DOMSimImage').style.visibility = "visible";

            XSSCheckBoxAttackerReflectedVariable.setAttribute("style", "position:fixed;top:17%;left:49%;height:5%;z-index: 1;visibility: hidden;");
            CheckButtonXSSAttackerReflectedVariable.setAttribute("style", "position:fixed;top:60%;left:40%;z-index: 1;visibility: hidden;");



            const questionImage1ContainerSimulatorZoneVariable = document.getElementById("questionImageContainerSimulatorZone1");
            const simulatorInteractiveText1Variable = document.getElementById("simulatorInteractiveText1");
            document.getElementById("questionImageContainerSimulatorZone1").src = "images/simulation_zone/Sim-Zone-Image.png";
            questionImage1ContainerSimulatorZoneVariable.setAttribute("style", "position:fixed;top:25%;left:20%;width:50%;height:40%;z-index: 0;visibility: visible;");
            simulatorInteractiveText1Variable.setAttribute("style", "position:fixed;top:82%;left:30%;width:auto;font-size: 2vw;");

            document.getElementById('simulatorInteractiveText1').style.visibility = "visible";
            document.getElementById('simulatorInteractiveText2').style.visibility = "hidden";
            document.getElementById('simulatorInteractiveText1').style.backgroundColor = "#435274";
            document.getElementById('CheckButtonXSSAttackerReflected').innerHTML = "Check";
            document.getElementById('simulatorInteractiveText1').innerText = "Add Simulation Action text here.";
            insideSimulatorAction2 = true;

            document.getElementById("XSSCheckBoxAttackerReflected").value = "";
            document.getElementById("DOMSimImage").src = "";

            if (!SimZoneSkills2AddedtoBar) {
                AttackerSimZoneSkillsValue = AttackerSimZoneSkillsValue + attackerSimZoneOffset;
                OverallSimZoneSkillsValue = OverallSimZoneSkillsValue + overallSimZoneOffset;
                SimZoneSkills2AddedtoBar = true;
            }

            var addedToSZArray = false;
            if (!addedToSZArray && !simulatorZoneAnswersArray.includes("#Role:0,Level:7,buttonID:2#")) {
                simulatorZoneAnswersArray.push("#Role:0,Level:7,buttonID:2#");
                simulatorZoneAnswersString = simulatorZoneAnswersString.concat("#buttonID:2#");
                addedToSZArray = true;
            }

        }

    } else if ((roleId == 0 && (currentLevelNo == 8 || currentLevelNo == 200)) || ((roleId == 0 && currentLevelNo == 8 && buttonID == 100) && (insideSimulatorAction1 || insideSimulatorAction2))) {

        const questionImage1ContainerSimulatorZoneVariable = document.getElementById("questionImageContainerSimulatorZone1");
        const circleInteractiveButton1Variable = document.getElementById("circleInteractiveButton1");
        const circleInteractiveButton2Variable = document.getElementById("circleInteractiveButton2");
        const InteractivityArrowRightVariable = document.getElementById("InteractivityArrowRight");
        const InteractivityArrowLeftVariable = document.getElementById("InteractivityArrowLeft");
        const simulatorInteractiveText1Variable = document.getElementById("simulatorInteractiveText1");
        const circleInteractiveText1Variable = document.getElementById("circleInteractiveText1");
        const circleInteractiveText2Variable = document.getElementById("circleInteractiveText2");
        const simulatorInteractiveText2Variable = document.getElementById("simulatorInteractiveText2");

        questionImage1ContainerSimulatorZoneVariable.setAttribute("style", "position:fixed;top:25%;left:20%;width:50%;height:40%;z-index: 0;visibility: visible;");

        circleInteractiveButton1Variable.setAttribute("style", "position:fixed;top:35%;left:71%;width:25%;height:50%;");
        circleInteractiveButton2Variable.setAttribute("style", "position:fixed;top:35%;left:5%;width:25%;height:50%;");
        InteractivityArrowRightVariable.setAttribute("style", "position:fixed;top:-2%;left:15%;");
        InteractivityArrowLeftVariable.setAttribute("style", "position:fixed;top:3%;left:51%;");

        simulatorInteractiveText2Variable.setAttribute("style", "position:fixed;top:25%;left:34%;width: 50%;font-size: 2vw;");
        circleInteractiveText1Variable.setAttribute("style", "margin-top: 30%;font-size: 2vw;");
        circleInteractiveText2Variable.setAttribute("style", "margin-top: 30%;font-size: 2vw;");

        document.getElementById("circleInteractiveText1").innerText = "Simulator Action 1";
        document.getElementById("circleInteractiveText2").innerHTML = "Simulator Action 2";

        document.getElementById("questionImageContainerSimulatorZone1").src = "images/simulation_zone/Sim-Zone-Image.png";

        document.getElementById('circleInteractiveButton1').style.visibility = "visible";
        document.getElementById('circleInteractiveButton2').style.visibility = "visible";
        document.getElementById('InteractivityArrowRight').style.visibility = "visible";
        document.getElementById('InteractivityArrowLeft').style.visibility = "visible";
        document.getElementById('InteractivityBackButton1').style.visibility = "hidden";
        document.getElementById('circleInteractiveText1').style.visibility = "visible";
        document.getElementById('circleInteractiveText2').style.visibility = "visible";
        document.getElementById('simulatorInteractiveText1').style.visibility = "visible";
        document.getElementById('simulatorInteractiveText2').style.visibility = "hidden";
        document.getElementById('questionImageContainerSimulatorZone2').style.visibility = "hidden";
        document.getElementById('XSSCheckBoxAttackerReflected').style.visibility = "hidden";
        document.getElementById('CheckButtonXSSAttackerReflected').style.visibility = "hidden";
        document.getElementById('DOMSimImage').style.visibility = "hidden";
        document.getElementById('sanitizedText').style.visibility = "hidden";

        simulatorInteractiveText1Variable.setAttribute("style", "position:fixed;top:82%;left:30%;width:auto;font-size: 2vw;background-color: #FF7F11;");
        document.getElementById('simulatorInteractiveText1').innerHTML = "The above two actions can be performed in the simulator.";
        document.getElementById('simulatorInteractiveText1').style.visibility = "visible";


        insideSimulatorAction1 = false;
        insideSimulatorAction2 = false;

        var addedToSZArray = false;
        if (!addedToSZArray && !simulatorZoneAnswersArray.includes("!Role:0,Level:8")) {
            simulatorZoneAnswersArray.push("!Role:0,Level:8");
            simulatorZoneAnswersString = simulatorZoneAnswersString.concat("!Role:0,Level:8");
            addedToSZArray = true;
        }


        if (buttonID == 1) {


            const XSSCheckBoxAttackerReflectedVariable = document.getElementById("XSSCheckBoxAttackerReflected");
            const CheckButtonXSSAttackerReflectedVariable = document.getElementById("CheckButtonXSSAttackerReflected");

            document.getElementById('circleInteractiveText1').style.visibility = "hidden";
            document.getElementById('circleInteractiveButton1').style.visibility = "hidden";
            document.getElementById('circleInteractiveText2').style.visibility = "hidden";
            document.getElementById('circleInteractiveButton2').style.visibility = "hidden";
            document.getElementById('InteractivityArrowRight').style.visibility = "hidden";
            document.getElementById('InteractivityArrowLeft').style.visibility = "hidden";
            document.getElementById('InteractivityBackButton1').style.visibility = "visible";
            document.getElementById('DOMSimImage').style.visibility = "hidden";


            XSSCheckBoxAttackerReflectedVariable.setAttribute("style", "position:fixed;top:43%;left:48%;height:5%;z-index: 1;visibility: hidden;");
            CheckButtonXSSAttackerReflectedVariable.setAttribute("style", "position:fixed;top:60%;right:5%;z-index: 1;visibility: hidden;");

            const questionImage1ContainerSimulatorZoneVariable = document.getElementById("questionImageContainerSimulatorZone1");
            const simulatorInteractiveText1Variable = document.getElementById("simulatorInteractiveText1");
            document.getElementById("questionImageContainerSimulatorZone1").src = "images/simulation_zone/Sim-Zone-Image.png";
            questionImage1ContainerSimulatorZoneVariable.setAttribute("style", "position:fixed;top:25%;left:20%;width:50%;height:40%;z-index: 0;visibility: visible;");
            simulatorInteractiveText1Variable.setAttribute("style", "position:fixed;top:82%;left:30%;width:auto;font-size: 2vw;");

            document.getElementById('simulatorInteractiveText1').style.visibility = "visible";
            document.getElementById('simulatorInteractiveText2').style.visibility = "hidden";
            document.getElementById('simulatorInteractiveText1').style.backgroundColor = "#5e3c58";
            document.getElementById('CheckButtonXSSAttackerReflected').innerHTML = "Check";
            document.getElementById('simulatorInteractiveText1').innerText = "Add Simulation Action text here.";
            insideSimulatorAction1 = true;

            document.getElementById("XSSCheckBoxAttackerReflected").value = "";
            document.getElementById("DOMSimImage").src = "";

            var addedToSZArray = false;
            if (!addedToSZArray && !simulatorZoneAnswersArray.includes("#Role:0,Level:8,buttonID:1#")) {
                simulatorZoneAnswersArray.push("#Role:0,Level:8,buttonID:1#");
                simulatorZoneAnswersString = simulatorZoneAnswersString.concat("#buttonID:1#");
                addedToSZArray = true;
            }

        } else if (buttonID == 2) {

            const XSSCheckBoxAttackerReflectedVariable = document.getElementById("XSSCheckBoxAttackerReflected");
            const CheckButtonXSSAttackerReflectedVariable = document.getElementById("CheckButtonXSSAttackerReflected");

            document.getElementById('circleInteractiveText1').style.visibility = "hidden";
            document.getElementById('circleInteractiveButton1').style.visibility = "hidden";
            document.getElementById('circleInteractiveText2').style.visibility = "hidden";
            document.getElementById('circleInteractiveButton2').style.visibility = "hidden";
            document.getElementById('InteractivityArrowRight').style.visibility = "hidden";
            document.getElementById('InteractivityArrowLeft').style.visibility = "hidden";
            document.getElementById('InteractivityBackButton1').style.visibility = "visible";
            document.getElementById('DOMSimImage').style.visibility = "hidden";

            XSSCheckBoxAttackerReflectedVariable.setAttribute("style", "position:fixed;top:16%;left:50%;height:5%;z-index: 1;visibility: hidden;");
            CheckButtonXSSAttackerReflectedVariable.setAttribute("style", "position:fixed;top:60%;left:40%;z-index: 1;visibility: hidden;");



            const questionImage1ContainerSimulatorZoneVariable = document.getElementById("questionImageContainerSimulatorZone1");
            const simulatorInteractiveText1Variable = document.getElementById("simulatorInteractiveText1");
            document.getElementById("questionImageContainerSimulatorZone1").src = "images/simulation_zone/Sim-Zone-Image.png";
            questionImage1ContainerSimulatorZoneVariable.setAttribute("style", "position:fixed;top:25%;left:20%;width:50%;height:40%;z-index: 0;visibility: visible;");
            simulatorInteractiveText1Variable.setAttribute("style", "position:fixed;top:82%;left:30%;width:auto;font-size: 2vw;");

            document.getElementById('simulatorInteractiveText1').style.visibility = "visible";
            document.getElementById('simulatorInteractiveText2').style.visibility = "hidden";
            document.getElementById('simulatorInteractiveText1').style.backgroundColor = "#435274";
            document.getElementById('simulatorInteractiveText1').innerText = "Add Simulation Action text here.";
            insideSimulatorAction2 = true;

            document.getElementById("XSSCheckBoxAttackerReflected").value = "";
            document.getElementById("DOMSimImage").src = "";

            if (!SimZoneSkills2AddedtoBar) {
                AttackerSimZoneSkillsValue = AttackerSimZoneSkillsValue + attackerSimZoneOffset;
                OverallSimZoneSkillsValue = OverallSimZoneSkillsValue + overallSimZoneOffset;
                SimZoneSkills2AddedtoBar = true;
            }

            var addedToSZArray = false;
            if (!addedToSZArray && !simulatorZoneAnswersArray.includes("#Role:0,Level:8,buttonID:2#")) {
                simulatorZoneAnswersArray.push("#Role:0,Level:8,buttonID:12#");
                simulatorZoneAnswersString = simulatorZoneAnswersString.concat("#buttonID:2#");
                addedToSZArray = true;
            }

        }

    } else if ((roleId == 1 && (currentLevelNo == 1 || currentLevelNo == 200)) || ((roleId == 1 && currentLevelNo == 1 && buttonID == 100) && (insideSimulatorAction1 || insideSimulatorAction2))) {

        const questionImage1ContainerSimulatorZoneVariable = document.getElementById("questionImageContainerSimulatorZone1");
        const circleInteractiveText1Variable = document.getElementById("circleInteractiveText1");
        const circleInteractiveText2Variable = document.getElementById("circleInteractiveText2");
        const simulatorInteractiveText1Variable = document.getElementById("simulatorInteractiveText1");
        const circleInteractiveButton1Variable = document.getElementById("circleInteractiveButton1");
        const circleInteractiveButton2Variable = document.getElementById("circleInteractiveButton2");
        const InteractivityArrowRightVariable = document.getElementById("InteractivityArrowRight");
        const InteractivityArrowLeftVariable = document.getElementById("InteractivityArrowLeft");

        const simulatorInteractiveText2Variable = document.getElementById("simulatorInteractiveText2");
        questionImage1ContainerSimulatorZoneVariable.setAttribute("style", "position:fixed;top:25%;left:20%;width:50%;height:40%;z-index: 0;visibility: visible;");

        circleInteractiveButton1Variable.setAttribute("style", "position:fixed;top:40%;left:21%;width:25%;height:50%;visibility:visible;");
        circleInteractiveButton2Variable.setAttribute("style", "position:fixed;top:35%;left:71%;width:25%;height:50%;visibility:visible;");
        InteractivityArrowRightVariable.setAttribute("style", "position:fixed;top:-6%;left:21%;visibility:visible;");
        InteractivityArrowLeftVariable.setAttribute("style", "position:fixed;top:3%;left:51%;visibility:visible;");

        document.getElementById("circleInteractiveText1").innerHTML = "Simulator Action 1";
        document.getElementById("circleInteractiveText2").innerHTML = "Simulator Action 2";
        document.getElementById("questionImageContainerSimulatorZone1").src = "images/simulation_zone/Sim-Zone-Image.png";

        document.getElementById('sanitizedText').style.visibility = "hidden";
        document.getElementById('circleInteractiveButton1').style.visibility = "visible";
        document.getElementById('circleInteractiveButton2').style.visibility = "visible";
        document.getElementById('InteractivityArrowRight').style.visibility = "visible";
        document.getElementById('InteractivityArrowLeft').style.visibility = "visible";
        document.getElementById('InteractivityBackButton1').style.visibility = "hidden";
        document.getElementById('circleInteractiveText1').style.visibility = "visible";
        document.getElementById('circleInteractiveText2').style.visibility = "visible";
        document.getElementById('simulatorInteractiveText1').style.visibility = "hidden";
        document.getElementById('simulatorInteractiveText2').style.visibility = "hidden";
        document.getElementById('XSSCheckBoxAttackerReflected').style.visibility = "hidden";
        document.getElementById('CheckButtonXSSAttackerReflected').style.visibility = "hidden";
        circleInteractiveText1Variable.setAttribute("style", "margin-top: 35%;visibility:visible;font-size: 2vw;");
        circleInteractiveText2Variable.setAttribute("style", "margin-top: 40%;visibility:visible;font-size: 2vw;");

        simulatorInteractiveText1Variable.setAttribute("style", "position:fixed;top:82%;left:30%;width:auto;font-size: 2vw;background-color: #FF7F11;");
        document.getElementById('simulatorInteractiveText1').innerHTML = "The above two actions can be performed in the simulator.";
        document.getElementById('simulatorInteractiveText1').style.visibility = "visible";

        insideSimulatorAction1 = false;
        insideSimulatorAction2 = false;

        var addedToSZArray = false;
        if (!addedToSZArray && !simulatorZoneAnswersArray.includes("!Role:1,Level:1")) {
            simulatorZoneAnswersArray.push("!Role:1,Level:1");
            simulatorZoneAnswersString = simulatorZoneAnswersString.concat("!Role:1,Level:1");
            addedToSZArray = true;
        }



        if (buttonID == 1) {



            document.getElementById('circleInteractiveButton1').style.visibility = "hidden";
            document.getElementById('circleInteractiveButton2').style.visibility = "hidden";
            document.getElementById('XSSCheckBoxAttackerReflected').style.visibility = "hidden";
            document.getElementById('CheckButtonXSSAttackerReflected').style.visibility = "hidden";
            document.getElementById('InteractivityArrowRight').style.visibility = "hidden";
            document.getElementById('InteractivityArrowLeft').style.visibility = "hidden";
            document.getElementById('circleInteractiveText1').style.visibility = "hidden";
            document.getElementById('circleInteractiveText2').style.visibility = "hidden";
            document.getElementById('InteractivityBackButton1').style.visibility = "visible";
            document.getElementById('simulatorInteractiveText2').style.visibility = "hidden";
            const simulatorInteractiveText1Variable = document.getElementById("simulatorInteractiveText1");
            const XSSCheckBoxAttackerReflectedVariable = document.getElementById("XSSCheckBoxAttackerReflected");
            document.getElementById("XSSCheckBoxAttackerReflected").value = "";
            XSSCheckBoxAttackerReflectedVariable.setAttribute("style", "position:fixed;top:25%;left:25%;width:28%;height:10%;visibility: hidden;z-index: 1;font-size:1.5vw;");



            const questionImage1ContainerSimulatorZoneVariable = document.getElementById("questionImageContainerSimulatorZone1");
            document.getElementById("questionImageContainerSimulatorZone1").src = "images/simulation_zone/Sim-Zone-Image.png";
            questionImage1ContainerSimulatorZoneVariable.setAttribute("style", "position:fixed;top:25%;left:20%;width:50%;height:40%;z-index: 0;visibility: visible;");
            document.getElementById('simulatorInteractiveText1').style.visibility = "visible";

            simulatorInteractiveText1Variable.setAttribute("style", "position:fixed;top:82%;left:30%;width:auto;font-size: 2vw;");
            document.getElementById('simulatorInteractiveText1').style.backgroundColor = "#5e3c58";
            document.getElementById('CheckButtonXSSAttackerReflected').innerHTML = "Check";
            document.getElementById('simulatorInteractiveText1').innerHTML = "Add Simulation Action text here.";
            insideSimulatorAction1 = true;



            var addedToSZArray = false;
            if (!addedToSZArray && !simulatorZoneAnswersArray.includes("#Role:1,Level:1,buttonID:1#")) {
                simulatorZoneAnswersArray.push("#Role:1,Level:1,buttonID:1#");
                simulatorZoneAnswersString = simulatorZoneAnswersString.concat("#buttonID:1#");
                addedToSZArray = true;
            }

        } else if (buttonID == 2) {


            document.getElementById('circleInteractiveButton1').style.visibility = "hidden";
            document.getElementById('circleInteractiveButton2').style.visibility = "hidden";
            document.getElementById('InteractivityBackButton1').style.visibility = "visible";
            document.getElementById('InteractivityArrowRight').style.visibility = "hidden";
            document.getElementById('InteractivityArrowLeft').style.visibility = "hidden";
            document.getElementById('circleInteractiveText1').style.visibility = "hidden";
            document.getElementById('circleInteractiveText2').style.visibility = "hidden";


            const questionImage1ContainerSimulatorZoneVariable = document.getElementById("questionImageContainerSimulatorZone1");
            const simulatorInteractiveText1Variable = document.getElementById("simulatorInteractiveText1");
            const InteractivityBackButton1Variable = document.getElementById('InteractivityBackButton1');

            document.getElementById("questionImageContainerSimulatorZone1").src = "images/simulation_zone/Sim-Zone-Image.png";
            questionImage1ContainerSimulatorZoneVariable.setAttribute("style", "position:fixed;top:25%;left:20%;width:50%;height:40%;z-index: 0;visibility: visible;");
            document.getElementById('simulatorInteractiveText2').style.visibility = "hidden";

            document.getElementById('simulatorInteractiveText1').innerHTML = "Add Simulation Action text here.";

            simulatorInteractiveText1Variable.setAttribute("style", "position:fixed;top:82%;left:30%;width:auto;font-size: 2vw;background-color: #435274;");
            InteractivityBackButton1Variable.setAttribute("style", "position:fixed;top:12%;left:80%;visibility: visible;");
            insideSimulatorAction2 = true;

            if (!SimZoneSkills2AddedtoBar) {
                DefenderSimZoneSkillsValue = DefenderSimZoneSkillsValue + defenderSimZoneOffset;
                OverallSimZoneSkillsValue = OverallSimZoneSkillsValue + overallSimZoneOffset;
                SimZoneSkills2AddedtoBar = true;
            }




            var addedToSZArray = false;
            if (!addedToSZArray && !simulatorZoneAnswersArray.includes("#Role:1,Level:1,buttonID:2#")) {
                simulatorZoneAnswersArray.push("#Role:1,Level:1,buttonID:2#");
                simulatorZoneAnswersString = simulatorZoneAnswersString.concat("#buttonID:2#");
                addedToSZArray = true;
            }
        }
    } else if ((roleId == 1 && (currentLevelNo == 2 || currentLevelNo == 200)) || ((roleId == 1 && currentLevelNo == 2 && buttonID == 100) && (insideSimulatorAction1 || insideSimulatorAction2))) {

        const questionImage1ContainerSimulatorZoneVariable = document.getElementById("questionImageContainerSimulatorZone1");
        const circleInteractiveText1Variable = document.getElementById("circleInteractiveText1");
        const circleInteractiveButton1Variable = document.getElementById("circleInteractiveButton1");
        const InteractivityArrowLeftVariable = document.getElementById("InteractivityArrowLeft");
        const simulatorInteractiveText1Variable = document.getElementById("simulatorInteractiveText1");

        questionImage1ContainerSimulatorZoneVariable.setAttribute("style", "position:fixed;top:25%;left:20%;width:50%;height:40%;z-index: 0;visibility: visible;");
        circleInteractiveButton1Variable.setAttribute("style", "position:fixed;top:35%;left:65%;width:25%;height:50%;");
        InteractivityArrowLeftVariable.setAttribute("style", "position:fixed;top:3%;left:45%;");

        document.getElementById("circleInteractiveText1").innerHTML = "Simulator Action 1";
        document.getElementById("circleInteractiveText2").innerHTML = "Simulator Action 2";
        document.getElementById("questionImageContainerSimulatorZone1").src = "images/simulation_zone/Sim-Zone-Image.png";

        document.getElementById('XSSCheckBoxAttackerReflected').style.visibility = "hidden";
        document.getElementById('CheckButtonXSSAttackerReflected').style.visibility = "hidden";
        document.getElementById('circleInteractiveButton1').style.visibility = "visible";
        document.getElementById('circleInteractiveButton2').style.visibility = "hidden";
        document.getElementById('InteractivityArrowRight').style.visibility = "hidden";
        document.getElementById('InteractivityArrowLeft').style.visibility = "visible";
        document.getElementById('InteractivityBackButton1').style.visibility = "hidden";
        document.getElementById('circleInteractiveText1').style.visibility = "visible";
        document.getElementById('circleInteractiveText2').style.visibility = "hidden";
        document.getElementById('simulatorInteractiveText1').style.visibility = "hidden";
        circleInteractiveText1Variable.setAttribute("style", "margin-top: 30%;visibility:visible;font-size: 1.8vw;");

        simulatorInteractiveText1Variable.setAttribute("style", "position:fixed;top:82%;left:30%;width:auto;font-size: 2vw;background-color: #FF7F11;");
        document.getElementById('simulatorInteractiveText1').innerHTML = "The above action can be performed in the simulator.";
        document.getElementById('simulatorInteractiveText1').style.visibility = "visible";
        document.getElementById('sanitizedText').style.visibility = "hidden";

        insideSimulatorAction1 = false;
        insideSimulatorAction2 = false;


        var addedToSZArray = false;
        if (!addedToSZArray && !simulatorZoneAnswersArray.includes("!Role:1,Level:2")) {
            simulatorZoneAnswersArray.push("!Role:1,Level:2");
            simulatorZoneAnswersString = simulatorZoneAnswersString.concat("!Role:1,Level:2");
            addedToSZArray = true;
        }


        if (buttonID == 1) {

            const XSSCheckBoxAttackerReflectedVariable = document.getElementById('XSSCheckBoxAttackerReflected');
            const CheckButtonXSSAttackerReflectedVariable = document.getElementById('CheckButtonXSSAttackerReflected');


            document.getElementById('circleInteractiveButton1').style.visibility = "hidden";
            document.getElementById('circleInteractiveButton2').style.visibility = "hidden";
            document.getElementById('InteractivityArrowRight').style.visibility = "hidden";
            document.getElementById('InteractivityArrowLeft').style.visibility = "hidden";
            document.getElementById('circleInteractiveText1').style.visibility = "hidden";
            document.getElementById('circleInteractiveText2').style.visibility = "hidden";
            document.getElementById('InteractivityBackButton1').style.visibility = "visible";
            document.getElementById('sanitizedText').style.visibility = "hidden";

            XSSCheckBoxAttackerReflectedVariable.setAttribute("style", "position:fixed;top:58%;left:13%;height:10%;z-index: 1;visibility: hidden;");
            CheckButtonXSSAttackerReflectedVariable.setAttribute("style", "position:fixed;top:60%;left:45%;z-index: 1;visibility: hidden;");

            const questionImage1ContainerSimulatorZoneVariable = document.getElementById("questionImageContainerSimulatorZone1");
            const simulatorInteractiveText1Variable = document.getElementById("simulatorInteractiveText1");
            document.getElementById("questionImageContainerSimulatorZone1").src = "images/simulation_zone/Sim-Zone-Image.png";
            questionImage1ContainerSimulatorZoneVariable.setAttribute("style", "position:fixed;top:25%;left:20%;width:50%;height:40%;z-index: 0;visibility: visible;");
            document.getElementById('simulatorInteractiveText1').style.visibility = "visible";
            document.getElementById('CheckButtonXSSAttackerReflected').innerHTML = "Check";
            document.getElementById('simulatorInteractiveText1').innerHTML = "Add Simulation Action text here.";
            insideSimulatorAction1 = true;
            document.getElementById("XSSCheckBoxAttackerReflected").value = "";

            if (!SimZoneSkills1AddedtoBar) {
                DefenderSimZoneSkillsValue = DefenderSimZoneSkillsValue + defenderSimZoneOffset;
                OverallSimZoneSkillsValue = OverallSimZoneSkillsValue + overallSimZoneOffset;
                SimZoneSkills1AddedtoBar = true;
            }

            var addedToSZArray = false;
            if (!addedToSZArray && !simulatorZoneAnswersArray.includes("#Role:1,Level:2,buttonID:1#")) {
                simulatorZoneAnswersArray.push("#Role:1,Level:2,buttonID:1#");
                simulatorZoneAnswersString = simulatorZoneAnswersString.concat("#buttonID:1#");
                addedToSZArray = true;
            }

        }


    } else if ((roleId == 1 && (currentLevelNo == 3 || currentLevelNo == 200)) || ((roleId == 1 && currentLevelNo == 3 && buttonID == 100) && (insideSimulatorAction1 || insideSimulatorAction2))) {

        const questionImage1ContainerSimulatorZoneVariable = document.getElementById("questionImageContainerSimulatorZone1");
        const circleInteractiveText1Variable = document.getElementById("circleInteractiveText1");
        const circleInteractiveText2Variable = document.getElementById("circleInteractiveText2");
        const circleInteractiveButton1Variable = document.getElementById("circleInteractiveButton1");
        const circleInteractiveButton2Variable = document.getElementById("circleInteractiveButton2");
        const InteractivityArrowLeftVariable = document.getElementById("InteractivityArrowLeft");
        const InteractivityArrowRightVariable = document.getElementById("InteractivityArrowRight");
        const simulatorInteractiveText1Variable = document.getElementById("simulatorInteractiveText1");

        questionImage1ContainerSimulatorZoneVariable.setAttribute("style", "position:fixed;top:25%;left:20%;width:50%;height:40%;z-index: 0;visibility: visible;");
        circleInteractiveButton1Variable.setAttribute("style", "position:fixed;top:30%;left:60%;width:25%;height:50%;");
        circleInteractiveButton2Variable.setAttribute("style", "position:fixed;top:30%;left:18%;width:25%;height:50%;");
        InteractivityArrowLeftVariable.setAttribute("style", "position:fixed;top:-2%;left:40%;");
        InteractivityArrowRightVariable.setAttribute("style", "position:fixed;top:-3%;left:30%;");

        document.getElementById("circleInteractiveText1").innerHTML = "Simulator Action 1";
        document.getElementById("circleInteractiveText2").innerHTML = "Simulator Action 2";
        document.getElementById("questionImageContainerSimulatorZone1").src = "images/simulation_zone/Sim-Zone-Image.png";

        document.getElementById('circleInteractiveButton1').style.visibility = "visible";
        document.getElementById('circleInteractiveButton2').style.visibility = "visible";
        document.getElementById('InteractivityArrowRight').style.visibility = "visible";
        document.getElementById('InteractivityArrowLeft').style.visibility = "visible";
        document.getElementById('InteractivityBackButton1').style.visibility = "hidden";
        document.getElementById('circleInteractiveText1').style.visibility = "visible";
        document.getElementById('circleInteractiveText2').style.visibility = "visible";
        document.getElementById('simulatorInteractiveText1').style.visibility = "hidden";
        document.getElementById('simulatorInteractiveText2').style.visibility = "hidden";
        circleInteractiveText1Variable.setAttribute("style", "margin-top: 30%;visibility:visible;font-size: 2vw;");
        circleInteractiveText2Variable.setAttribute("style", "margin-top: 30%;visibility:visible;font-size: 2vw;");

        simulatorInteractiveText1Variable.setAttribute("style", "position:fixed;top:82%;left:30%;width:auto;font-size: 2vw;background-color: #FF7F11;");
        document.getElementById('simulatorInteractiveText1').innerHTML = "The above two actions can be performed in the simulator.";
        document.getElementById('simulatorInteractiveText1').style.visibility = "visible";
        document.getElementById('sanitizedText').style.visibility = "hidden";

        insideSimulatorAction1 = false;
        insideSimulatorAction2 = false;


        var addedToSZArray = false;
        if (!addedToSZArray && !simulatorZoneAnswersArray.includes("!Role:1,Level:3")) {
            simulatorZoneAnswersArray.push("!Role:1,Level:3");
            simulatorZoneAnswersString = simulatorZoneAnswersString.concat("!Role:1,Level:3");
            addedToSZArray = true;
        }


        if (buttonID == 1) {



            document.getElementById('circleInteractiveButton1').style.visibility = "hidden";
            document.getElementById('circleInteractiveButton2').style.visibility = "hidden";
            document.getElementById('InteractivityArrowRight').style.visibility = "hidden";
            document.getElementById('InteractivityArrowLeft').style.visibility = "hidden";
            document.getElementById('circleInteractiveText1').style.visibility = "hidden";
            document.getElementById('circleInteractiveText2').style.visibility = "hidden";
            document.getElementById('InteractivityBackButton1').style.visibility = "visible";

            const questionImage1ContainerSimulatorZoneVariable = document.getElementById("questionImageContainerSimulatorZone1");
            const simulatorInteractiveText1Variable = document.getElementById("simulatorInteractiveText1");
            const simulatorInteractiveText2Variable = document.getElementById("simulatorInteractiveText2");
            document.getElementById("questionImageContainerSimulatorZone1").src = "images/simulation_zone/Sim-Zone-Image.png";
            questionImage1ContainerSimulatorZoneVariable.setAttribute("style", "position:fixed;top:25%;left:20%;width:50%;height:40%;z-index: 0;visibility: visible;");
            simulatorInteractiveText1Variable.setAttribute("style", "position:fixed;top:78%;left:6%;font-size: 1.8vw;width:65%;background-color:#5e3c58;");
            simulatorInteractiveText2Variable.setAttribute("style", "position:fixed;top:20%;left:6%;font-size: 2vw;width:90%;background-color:rgb(0, 0, 0);");
            document.getElementById('simulatorInteractiveText1').style.visibility = "visible";
            document.getElementById('simulatorInteractiveText2').style.visibility = "visible";
            document.getElementById('simulatorInteractiveText1').innerHTML = "Add Simulation Action text here.";

            insideSimulatorAction1 = true;

            if (!SimZoneSkills1AddedtoBar) {
                DefenderSimZoneSkillsValue = DefenderSimZoneSkillsValue + defenderSimZoneOffset;
                OverallSimZoneSkillsValue = OverallSimZoneSkillsValue + overallSimZoneOffset;
                SimZoneSkills1AddedtoBar = true;
            }

            var addedToSZArray = false;
            if (!addedToSZArray && !simulatorZoneAnswersArray.includes("#Role:1,Level:3,buttonID:1#")) {
                simulatorZoneAnswersArray.push("#Role:1,Level:3,buttonID:1#");
                simulatorZoneAnswersString = simulatorZoneAnswersString.concat("#buttonID:1#");
                addedToSZArray = true;
            }

        } else if (buttonID == 2) {


            document.getElementById('circleInteractiveButton1').style.visibility = "hidden";
            document.getElementById('circleInteractiveButton2').style.visibility = "hidden";
            document.getElementById('InteractivityBackButton1').style.visibility = "visible";
            document.getElementById('InteractivityArrowRight').style.visibility = "hidden";
            document.getElementById('InteractivityArrowLeft').style.visibility = "hidden";
            document.getElementById('circleInteractiveText1').style.visibility = "hidden";
            document.getElementById('circleInteractiveText2').style.visibility = "hidden";


            const questionImage1ContainerSimulatorZoneVariable = document.getElementById("questionImageContainerSimulatorZone1");
            const simulatorInteractiveText1Variable = document.getElementById("simulatorInteractiveText1");
            const InteractivityBackButton1Variable = document.getElementById('InteractivityBackButton1');
            const simulatorInteractiveText2Variable = document.getElementById("simulatorInteractiveText2");
            document.getElementById("questionImageContainerSimulatorZone1").src = "images/simulation_zone/Sim-Zone-Image.png";
            questionImage1ContainerSimulatorZoneVariable.setAttribute("style", "position:fixed;top:25%;left:20%;width:50%;height:40%;z-index: 0;visibility: visible;");
            document.getElementById('simulatorInteractiveText1').style.visibility = "visible";
            document.getElementById('simulatorInteractiveText2').style.visibility = "visible";

            document.getElementById('simulatorInteractiveText1').innerHTML = "Add Simulation Action text here.";

            simulatorInteractiveText1Variable.setAttribute("style", "position:fixed;top:82%;left:30%;width:auto;font-size: 2vw;background-color: #435274;");
            simulatorInteractiveText2Variable.setAttribute("style", "position:fixed;top:20%;left:6%;font-size: 1.5vw;width:90%;background-color:rgb(0, 0, 0);visibility: hidden;");
            InteractivityBackButton1Variable.setAttribute("style", "position:fixed;top:12%;left:80%;visibility: visible;");
            insideSimulatorAction2 = true;

            if (!SimZoneSkills2AddedtoBar) {
                DefenderSimZoneSkillsValue = DefenderSimZoneSkillsValue + defenderSimZoneOffset;
                OverallSimZoneSkillsValue = OverallSimZoneSkillsValue + overallSimZoneOffset;
                SimZoneSkills2AddedtoBar = true;
            }

            var addedToSZArray = false;
            if (!addedToSZArray && !simulatorZoneAnswersArray.includes("#Role:1,Level:3,buttonID:2#")) {
                simulatorZoneAnswersArray.push("#Role:1,Level:3,buttonID:2#");
                simulatorZoneAnswersString = simulatorZoneAnswersString.concat("#buttonID:2#");
                addedToSZArray = true;
            }
        }
    } else if ((roleId == 1 && (currentLevelNo == 4 || currentLevelNo == 200)) || ((roleId == 1 && currentLevelNo == 4 && buttonID == 100) && (insideSimulatorAction1 || insideSimulatorAction2))) {

        const questionImage1ContainerSimulatorZoneVariable = document.getElementById("questionImageContainerSimulatorZone1");
        const circleInteractiveText1Variable = document.getElementById("circleInteractiveText1");
        const circleInteractiveText2Variable = document.getElementById("circleInteractiveText2");
        const circleInteractiveButton1Variable = document.getElementById("circleInteractiveButton1");
        const circleInteractiveButton2Variable = document.getElementById("circleInteractiveButton2");
        const InteractivityArrowLeftVariable = document.getElementById("InteractivityArrowLeft");
        const InteractivityArrowRightVariable = document.getElementById("InteractivityArrowRight");
        const simulatorInteractiveText1Variable = document.getElementById("simulatorInteractiveText1");

        questionImage1ContainerSimulatorZoneVariable.setAttribute("style", "position:fixed;top:25%;left:20%;width:50%;height:40%;z-index: 0;visibility: visible;");
        circleInteractiveButton1Variable.setAttribute("style", "position:fixed;top:30%;left:60%;width:25%;height:50%;");
        circleInteractiveButton2Variable.setAttribute("style", "position:fixed;top:30%;left:18%;width:25%;height:50%;");
        InteractivityArrowLeftVariable.setAttribute("style", "position:fixed;top:-2%;left:40%;");
        InteractivityArrowRightVariable.setAttribute("style", "position:fixed;top:-3%;left:30%;");

        document.getElementById("circleInteractiveText1").innerHTML = "Simulator Action 1";
        document.getElementById("circleInteractiveText2").innerHTML = "Simulator Action 2";
        document.getElementById("questionImageContainerSimulatorZone1").src = "images/simulation_zone/Sim-Zone-Image.png";

        document.getElementById('circleInteractiveButton1').style.visibility = "visible";
        document.getElementById('circleInteractiveButton2').style.visibility = "visible";
        document.getElementById('InteractivityArrowRight').style.visibility = "visible";
        document.getElementById('InteractivityArrowLeft').style.visibility = "visible";
        document.getElementById('InteractivityBackButton1').style.visibility = "hidden";
        document.getElementById('circleInteractiveText1').style.visibility = "visible";
        document.getElementById('circleInteractiveText2').style.visibility = "visible";
        document.getElementById('simulatorInteractiveText1').style.visibility = "hidden";
        document.getElementById('simulatorInteractiveText2').style.visibility = "hidden";
        circleInteractiveText1Variable.setAttribute("style", "margin-top: 30%;visibility:visible;font-size: 2vw;");
        circleInteractiveText2Variable.setAttribute("style", "margin-top: 30%;visibility:visible;font-size: 2vw;");

        simulatorInteractiveText1Variable.setAttribute("style", "position:fixed;top:82%;left:30%;width:auto;font-size: 2vw;background-color: #FF7F11;");
        document.getElementById('simulatorInteractiveText1').innerHTML = "The above two actions can be performed in the simulator.";
        document.getElementById('simulatorInteractiveText1').style.visibility = "visible";
        document.getElementById('sanitizedText').style.visibility = "hidden";

        insideSimulatorAction1 = false;
        insideSimulatorAction2 = false;


        var addedToSZArray = false;
        if (!addedToSZArray && !simulatorZoneAnswersArray.includes("!Role:1,Level:4")) {
            simulatorZoneAnswersArray.push("!Role:1,Level:4");
            simulatorZoneAnswersString = simulatorZoneAnswersString.concat("!Role:1,Level:4");
            addedToSZArray = true;
        }


        if (buttonID == 1) {



            document.getElementById('circleInteractiveButton1').style.visibility = "hidden";
            document.getElementById('circleInteractiveButton2').style.visibility = "hidden";
            document.getElementById('InteractivityArrowRight').style.visibility = "hidden";
            document.getElementById('InteractivityArrowLeft').style.visibility = "hidden";
            document.getElementById('circleInteractiveText1').style.visibility = "hidden";
            document.getElementById('circleInteractiveText2').style.visibility = "hidden";
            document.getElementById('InteractivityBackButton1').style.visibility = "visible";

            const questionImage1ContainerSimulatorZoneVariable = document.getElementById("questionImageContainerSimulatorZone1");
            const simulatorInteractiveText1Variable = document.getElementById("simulatorInteractiveText1");
            const simulatorInteractiveText2Variable = document.getElementById("simulatorInteractiveText2");
            document.getElementById("questionImageContainerSimulatorZone1").src = "images/simulation_zone/Sim-Zone-Image.png";
            questionImage1ContainerSimulatorZoneVariable.setAttribute("style", "position:fixed;top:25%;left:20%;width:50%;height:40%;z-index: 0;visibility: visible;");
            simulatorInteractiveText1Variable.setAttribute("style", "position:fixed;top:82%;left:30%;width:auto;font-size: 2vw;background-color:#5e3c58;");
            simulatorInteractiveText2Variable.setAttribute("style", "position:fixed;top:20%;left:6%;font-size: 2vw;width:90%;background-color:rgb(0, 0, 0);");
            document.getElementById('simulatorInteractiveText1').style.visibility = "visible";
            document.getElementById('simulatorInteractiveText2').style.visibility = "hidden";
            document.getElementById('simulatorInteractiveText1').innerHTML = "Add Simulation Action text here.";

            insideSimulatorAction1 = true;

            if (!SimZoneSkills1AddedtoBar) {
                DefenderSimZoneSkillsValue = DefenderSimZoneSkillsValue + defenderSimZoneOffset;
                OverallSimZoneSkillsValue = OverallSimZoneSkillsValue + overallSimZoneOffset;
                SimZoneSkills1AddedtoBar = true;
            }

            var addedToSZArray = false;
            if (!addedToSZArray && !simulatorZoneAnswersArray.includes("#Role:1,Level:4,buttonID:1#")) {
                simulatorZoneAnswersArray.push("#Role:1,Level:4,buttonID:1#");
                simulatorZoneAnswersString = simulatorZoneAnswersString.concat("#buttonID:1#");
                addedToSZArray = true;
            }

        } else if (buttonID == 2) {


            document.getElementById('circleInteractiveButton1').style.visibility = "hidden";
            document.getElementById('circleInteractiveButton2').style.visibility = "hidden";
            document.getElementById('InteractivityBackButton1').style.visibility = "visible";
            document.getElementById('InteractivityArrowRight').style.visibility = "hidden";
            document.getElementById('InteractivityArrowLeft').style.visibility = "hidden";
            document.getElementById('circleInteractiveText1').style.visibility = "hidden";
            document.getElementById('circleInteractiveText2').style.visibility = "hidden";


            const questionImage1ContainerSimulatorZoneVariable = document.getElementById("questionImageContainerSimulatorZone1");
            const simulatorInteractiveText1Variable = document.getElementById("simulatorInteractiveText1");
            const InteractivityBackButton1Variable = document.getElementById('InteractivityBackButton1');
            const simulatorInteractiveText2Variable = document.getElementById("simulatorInteractiveText2");
            document.getElementById("questionImageContainerSimulatorZone1").src = "images/simulation_zone/Sim-Zone-Image.png";
            questionImage1ContainerSimulatorZoneVariable.setAttribute("style", "position:fixed;top:25%;left:20%;width:50%;height:40%;z-index: 0;visibility: visible;");
            document.getElementById('simulatorInteractiveText1').style.visibility = "visible";
            document.getElementById('simulatorInteractiveText2').style.visibility = "visible";

            document.getElementById('simulatorInteractiveText1').innerHTML = "dd Simulation Action text here.";

            simulatorInteractiveText1Variable.setAttribute("style", "position:fixed;top:82%;left:30%;width:auto;font-size: 2vw;background-color: #435274;");
            simulatorInteractiveText2Variable.setAttribute("style", "position:fixed;top:20%;left:6%;font-size: 1.6vw;width:90%;background-color:rgb(0, 0, 0);visibility: visible;");
            InteractivityBackButton1Variable.setAttribute("style", "position:fixed;top:12%;left:80%;visibility: visible;");
            insideSimulatorAction2 = true;

            if (!SimZoneSkills2AddedtoBar) {
                DefenderSimZoneSkillsValue = DefenderSimZoneSkillsValue + defenderSimZoneOffset;
                OverallSimZoneSkillsValue = OverallSimZoneSkillsValue + overallSimZoneOffset;
                SimZoneSkills2AddedtoBar = true;
            }

            var addedToSZArray = false;
            if (!addedToSZArray && !simulatorZoneAnswersArray.includes("#Role:1,Level:4,buttonID:2#")) {
                simulatorZoneAnswersArray.push("#Role:1,Level:4,buttonID:2#");
                simulatorZoneAnswersString = simulatorZoneAnswersString.concat("#buttonID:2#");
                addedToSZArray = true;
            }
        }
    } else if ((roleId == 1 && (currentLevelNo == 5 || currentLevelNo == 200)) || ((roleId == 1 && currentLevelNo == 5 && buttonID == 100) && (insideSimulatorAction1 || insideSimulatorAction2))) {

        const questionImage1ContainerSimulatorZoneVariable = document.getElementById("questionImageContainerSimulatorZone1");
        const circleInteractiveText1Variable = document.getElementById("circleInteractiveText1");
        const circleInteractiveButton1Variable = document.getElementById("circleInteractiveButton1");
        const InteractivityArrowLeftVariable = document.getElementById("InteractivityArrowLeft");
        const simulatorInteractiveText1Variable = document.getElementById("simulatorInteractiveText1");

        questionImage1ContainerSimulatorZoneVariable.setAttribute("style", "position:fixed;top:25%;left:20%;width:50%;height:40%;z-index: 0;visibility: visible;");
        circleInteractiveButton1Variable.setAttribute("style", "position:fixed;top:30%;left:68%;width:25%;height:50%;");
        InteractivityArrowLeftVariable.setAttribute("style", "position:fixed;top:8%;left:46%;");

        document.getElementById("circleInteractiveText1").innerHTML = "Simulator Action 1";

        document.getElementById("questionImageContainerSimulatorZone1").src = "images/simulation_zone/Sim-Zone-Image.png";

        document.getElementById('circleInteractiveButton1').style.visibility = "visible";
        document.getElementById('circleInteractiveButton2').style.visibility = "hidden";
        document.getElementById('InteractivityArrowRight').style.visibility = "hidden";
        document.getElementById('InteractivityArrowLeft').style.visibility = "visible";
        document.getElementById('InteractivityBackButton1').style.visibility = "hidden";
        document.getElementById('circleInteractiveText1').style.visibility = "visible";
        document.getElementById('circleInteractiveText2').style.visibility = "hidden";
        document.getElementById('simulatorInteractiveText1').style.visibility = "hidden";
        circleInteractiveText1Variable.setAttribute("style", "margin-top: 30%;visibility:visible;font-size: 2vw;");

        simulatorInteractiveText1Variable.setAttribute("style", "position:fixed;top:82%;left:30%;width:auto;font-size: 2vw;background-color: #FF7F11;");
        document.getElementById('simulatorInteractiveText1').innerHTML = "The above action can be performed in the simulator.";
        document.getElementById('simulatorInteractiveText1').style.visibility = "visible";
        document.getElementById('sanitizedText').style.visibility = "hidden";

        insideSimulatorAction1 = false;
        insideSimulatorAction2 = false;


        var addedToSZArray = false;
        if (!addedToSZArray && !simulatorZoneAnswersArray.includes("!Role:1,Level:3")) {
            simulatorZoneAnswersArray.push("!Role:1,Level:3");
            simulatorZoneAnswersString = simulatorZoneAnswersString.concat("!Role:1,Level:3");
            addedToSZArray = true;
        }


        if (buttonID == 1) {



            document.getElementById('circleInteractiveButton1').style.visibility = "hidden";
            document.getElementById('circleInteractiveButton2').style.visibility = "hidden";
            document.getElementById('InteractivityArrowRight').style.visibility = "hidden";
            document.getElementById('InteractivityArrowLeft').style.visibility = "hidden";
            document.getElementById('circleInteractiveText1').style.visibility = "hidden";
            document.getElementById('circleInteractiveText2').style.visibility = "hidden";
            document.getElementById('InteractivityBackButton1').style.visibility = "visible";

            const questionImage1ContainerSimulatorZoneVariable = document.getElementById("questionImageContainerSimulatorZone1");
            const simulatorInteractiveText1Variable = document.getElementById("simulatorInteractiveText1");
            document.getElementById("questionImageContainerSimulatorZone1").src = "images/simulation_zone/Sim-Zone-Image.png";
            questionImage1ContainerSimulatorZoneVariable.setAttribute("style", "position:fixed;top:25%;left:20%;width:50%;height:40%;z-index: 0;visibility: visible;");
            simulatorInteractiveText1Variable.setAttribute("style", "position:fixed;top:82%;left:30%;width:auto;font-size: 2vw;background-color:#5e3c58;");
            document.getElementById('simulatorInteractiveText1').style.visibility = "visible";
            document.getElementById('simulatorInteractiveText1').innerHTML = "Add Simulation Action text here.";
            insideSimulatorAction1 = true;

            if (!SimZoneSkills1AddedtoBar) {
                DefenderSimZoneSkillsValue = DefenderSimZoneSkillsValue + defenderSimZoneOffset;
                OverallSimZoneSkillsValue = OverallSimZoneSkillsValue + overallSimZoneOffset;
                SimZoneSkills1AddedtoBar = true;
            }

            var addedToSZArray = false;
            if (!addedToSZArray && !simulatorZoneAnswersArray.includes("#Role:1,Level:3,buttonID:1#")) {
                simulatorZoneAnswersArray.push("#Role:1,Level:3,buttonID:1#");
                simulatorZoneAnswersString = simulatorZoneAnswersString.concat("#buttonID:1#");
                addedToSZArray = true;
            }

        }
    } else if ((roleId == 2 && (currentLevelNo == 1 || currentLevelNo == 200)) || ((roleId == 2 && currentLevelNo == 1 && buttonID == 100) && (insideSimulatorAction1 || insideSimulatorAction2))) {

        const questionImage1ContainerSimulatorZoneVariable = document.getElementById("questionImageContainerSimulatorZone1");
        const circleInteractiveButton1Variable = document.getElementById("circleInteractiveButton1");
        const circleInteractiveButton2Variable = document.getElementById("circleInteractiveButton2");
        const InteractivityArrowRightVariable = document.getElementById("InteractivityArrowRight");
        const InteractivityArrowLeftVariable = document.getElementById("InteractivityArrowLeft");
        const simulatorInteractiveText1Variable = document.getElementById("simulatorInteractiveText1");
        const circleInteractiveText1Variable = document.getElementById("circleInteractiveText1");
        const circleInteractiveText2Variable = document.getElementById("circleInteractiveText2");
        const simulatorInteractiveText2Variable = document.getElementById("simulatorInteractiveText2");

        questionImage1ContainerSimulatorZoneVariable.setAttribute("style", "position:fixed;top:25%;left:20%;width:50%;height:40%;z-index: 0;visibility: visible;");

        circleInteractiveButton1Variable.setAttribute("style", "position:fixed;top:30%;left:3%;width:25%;height:50%;");
        circleInteractiveButton2Variable.setAttribute("style", "position:fixed;top:30%;left:71%;width:25%;height:50%;");
        InteractivityArrowRightVariable.setAttribute("style", "position:fixed;top:-2%;left:12%;");
        InteractivityArrowLeftVariable.setAttribute("style", "position:fixed;top:-2%;left:55%;");
        simulatorInteractiveText1Variable.setAttribute("style", "position:fixed;top:82%;left:30%;width:auto;font-size: 2vw;background-color: #FF7F11;");
        simulatorInteractiveText2Variable.setAttribute("style", "position:fixed;top:28%;left:34%;width:32%;font-size: 1.4vw;");
        circleInteractiveText1Variable.setAttribute("style", "margin-top: 25%;font-size: 1.8vw;");
        circleInteractiveText2Variable.setAttribute("style", "margin-top: 25%;font-size: 1.8vw;");

        document.getElementById("circleInteractiveText1").innerHTML = "Simulator Action 1";
        document.getElementById("circleInteractiveText2").innerHTML = "Simulator Action 2";

        document.getElementById("questionImageContainerSimulatorZone1").src = "images/simulation_zone/Sim-Zone-Image.png";

        document.getElementById('circleInteractiveButton1').style.visibility = "visible";
        document.getElementById('circleInteractiveButton2').style.visibility = "visible";
        document.getElementById('InteractivityArrowRight').style.visibility = "visible";
        document.getElementById('InteractivityArrowLeft').style.visibility = "visible";
        document.getElementById('InteractivityBackButton1').style.visibility = "hidden";
        document.getElementById('circleInteractiveText1').style.visibility = "visible";
        document.getElementById('circleInteractiveText2').style.visibility = "visible";
        document.getElementById('simulatorInteractiveText1').style.visibility = "visible";
        document.getElementById('simulatorInteractiveText2').style.visibility = "visible";
        document.getElementById('questionImageContainerSimulatorZone2').style.visibility = "hidden";
        document.getElementById('sanitizedText').style.visibility = "hidden";

        document.getElementById('simulatorInteractiveText1').innerHTML = "The above two actions can be performed in the simulator.";

        insideSimulatorAction1 = false;
        insideSimulatorAction2 = false;


        var addedToSZArray = false;
        if (!addedToSZArray && !simulatorZoneAnswersArray.includes("!Role:2,Level:1")) {
            simulatorZoneAnswersArray.push("!Role:2,Level:1");
            simulatorZoneAnswersString = simulatorZoneAnswersString.concat("!Role:2,Level:1");
            addedToSZArray = true;
        }


        if (buttonID == 1) {

            document.getElementById('circleInteractiveButton1').style.visibility = "hidden";
            document.getElementById('circleInteractiveButton2').style.visibility = "hidden";
            document.getElementById('InteractivityArrowRight').style.visibility = "hidden";
            document.getElementById('InteractivityArrowLeft').style.visibility = "hidden";
            document.getElementById('circleInteractiveText1').style.visibility = "hidden";
            document.getElementById('circleInteractiveText2').style.visibility = "hidden";
            document.getElementById('simulatorInteractiveText2').style.visibility = "hidden";
            document.getElementById('InteractivityBackButton1').style.visibility = "visible";

            const questionImage1ContainerSimulatorZoneVariable = document.getElementById("questionImageContainerSimulatorZone1");
            const simulatorInteractiveText1Variable = document.getElementById("simulatorInteractiveText1");
            document.getElementById("questionImageContainerSimulatorZone1").src = "images/simulation_zone/Sim-Zone-Image.png";
            questionImage1ContainerSimulatorZoneVariable.setAttribute("style", "position:fixed;top:25%;left:20%;width:50%;height:40%;z-index: 0;visibility: visible;");
            simulatorInteractiveText1Variable.setAttribute("style", "position:fixed;top:82%;left:30%;width:auto;font-size: 2vw;background-color: #5e3c58;");
            document.getElementById('simulatorInteractiveText1').style.visibility = "visible";
            document.getElementById('simulatorInteractiveText1').innerHTML = "Add Simulation Action text here.";
            insideSimulatorAction1 = true;

            if (!SimZoneSkills1AddedtoBar) {
                UserSimZoneSkillsValue = UserSimZoneSkillsValue + userSimZoneOffset;
                OverallSimZoneSkillsValue = OverallSimZoneSkillsValue + overallSimZoneOffset;
                SimZoneSkills1AddedtoBar = true;
            }

            var addedToSZArray = false;
            if (!addedToSZArray && !simulatorZoneAnswersArray.includes("#Role:2,Level:1,buttonID:1#")) {
                simulatorZoneAnswersArray.push("#Role:2,Level:1,buttonID:1#");
                simulatorZoneAnswersString = simulatorZoneAnswersString.concat("#buttonID:1#");
                addedToSZArray = true;
            }

        } else if (buttonID == 2) {


            document.getElementById('circleInteractiveButton1').style.visibility = "hidden";
            document.getElementById('circleInteractiveButton2').style.visibility = "hidden";
            document.getElementById('InteractivityBackButton1').style.visibility = "visible";
            document.getElementById('InteractivityArrowRight').style.visibility = "hidden";
            document.getElementById('InteractivityArrowLeft').style.visibility = "hidden";
            document.getElementById('circleInteractiveText1').style.visibility = "hidden";
            document.getElementById('circleInteractiveText2').style.visibility = "hidden";
            document.getElementById('simulatorInteractiveText2').style.visibility = "hidden";

            const questionImage1ContainerSimulatorZoneVariable = document.getElementById("questionImageContainerSimulatorZone1");
            const simulatorInteractiveText1Variable = document.getElementById("simulatorInteractiveText1");
            const InteractivityBackButton1Variable = document.getElementById('InteractivityBackButton1');

            document.getElementById("questionImageContainerSimulatorZone1").src = "images/simulation_zone/Sim-Zone-Image.png";
            questionImage1ContainerSimulatorZoneVariable.setAttribute("style", "position:fixed;top:25%;left:20%;width:50%;height:40%;z-index: 0;visibility: visible;");
            document.getElementById('simulatorInteractiveText1').style.visibility = "visible";

            document.getElementById('simulatorInteractiveText1').innerHTML = "Add Simulation Action text here.";

            simulatorInteractiveText1Variable.setAttribute("style", "position:fixed;top:82%;left:30%;width:auto;font-size: 2vw;background-color: #435274;");
            InteractivityBackButton1Variable.setAttribute("style", "position:fixed;top:12%;left:80%;visibility: visible;");
            insideSimulatorAction2 = true;

            if (!SimZoneSkills2AddedtoBar) {
                UserSimZoneSkillsValue = UserSimZoneSkillsValue + userSimZoneOffset;
                OverallSimZoneSkillsValue = OverallSimZoneSkillsValue + overallSimZoneOffset;
                SimZoneSkills2AddedtoBar = true;
            }

            var addedToSZArray = false;
            if (!addedToSZArray && !simulatorZoneAnswersArray.includes("#Role:2,Level:1,buttonID:2#")) {
                simulatorZoneAnswersArray.push("#Role:2,Level:1,buttonID:2#");
                simulatorZoneAnswersString = simulatorZoneAnswersString.concat("#buttonID:2#");
                addedToSZArray = true;
            }
        }
    } else if ((roleId == 2 && (currentLevelNo == 2 || currentLevelNo == 200)) || ((roleId == 2 && currentLevelNo == 2 && buttonID == 100) && (insideSimulatorAction1 || insideSimulatorAction2))) {

        const questionImage1ContainerSimulatorZoneVariable = document.getElementById("questionImageContainerSimulatorZone1");
        const circleInteractiveButton1Variable = document.getElementById("circleInteractiveButton1");
        const circleInteractiveButton2Variable = document.getElementById("circleInteractiveButton2");
        const InteractivityArrowRightVariable = document.getElementById("InteractivityArrowRight");
        const InteractivityArrowLeftVariable = document.getElementById("InteractivityArrowLeft");
        const simulatorInteractiveText1Variable = document.getElementById("simulatorInteractiveText1");
        const circleInteractiveText1Variable = document.getElementById("circleInteractiveText1");
        const circleInteractiveText2Variable = document.getElementById("circleInteractiveText2");
        const simulatorInteractiveText2Variable = document.getElementById("simulatorInteractiveText2");

        questionImage1ContainerSimulatorZoneVariable.setAttribute("style", "position:fixed;top:25%;left:20%;width:50%;height:40%;z-index: 0;visibility: visible;");

        circleInteractiveButton1Variable.setAttribute("style", "position:fixed;top:30%;left:51%;width:25%;height:50%;");
        circleInteractiveButton2Variable.setAttribute("style", "position:fixed;top:30%;left:13%;width:25%;height:50%;");
        InteractivityArrowRightVariable.setAttribute("style", "position:fixed;top:-2%;left:61%;");
        InteractivityArrowLeftVariable.setAttribute("style", "position:fixed;top:-2%;left:-8%;");
        simulatorInteractiveText1Variable.setAttribute("style", "position:fixed;top:82%;left:30%;width:auto;font-size: 2vw;background-color: #FF7F11;");
        simulatorInteractiveText2Variable.setAttribute("style", "position:fixed;top:25%;left:34%;width: 50%;font-size: 2vw;");
        circleInteractiveText1Variable.setAttribute("style", "margin-top: 35%;font-size: 2vw;");
        circleInteractiveText2Variable.setAttribute("style", "margin-top: 20%;font-size: 2vw;");

        document.getElementById("circleInteractiveText1").innerHTML = "Simulator Action 1";
        document.getElementById("circleInteractiveText2").innerHTML = "Simulator Action 2";

        document.getElementById("questionImageContainerSimulatorZone1").src = "images/simulation_zone/Sim-Zone-Image.png";

        document.getElementById('circleInteractiveButton1').style.visibility = "visible";
        document.getElementById('circleInteractiveButton2').style.visibility = "visible";
        document.getElementById('InteractivityArrowRight').style.visibility = "visible";
        document.getElementById('InteractivityArrowLeft').style.visibility = "visible";
        document.getElementById('InteractivityBackButton1').style.visibility = "hidden";
        document.getElementById('circleInteractiveText1').style.visibility = "visible";
        document.getElementById('circleInteractiveText2').style.visibility = "visible";
        document.getElementById('simulatorInteractiveText1').style.visibility = "visible";
        document.getElementById('simulatorInteractiveText2').style.visibility = "hidden";
        document.getElementById('questionImageContainerSimulatorZone2').style.visibility = "hidden";
        document.getElementById('sanitizedText').style.visibility = "hidden";

        document.getElementById('simulatorInteractiveText1').innerHTML = "The above two actions can be performed in the simulator.";


        insideSimulatorAction1 = false;
        insideSimulatorAction2 = false;



        var addedToSZArray = false;
        if (!addedToSZArray && !simulatorZoneAnswersArray.includes("!Role:2,Level:2")) {
            simulatorZoneAnswersArray.push("!Role:2,Level:2");
            simulatorZoneAnswersString = simulatorZoneAnswersString.concat("!Role:2,Level:2");
            addedToSZArray = true;
        }

        if (buttonID == 1) {

            document.getElementById('circleInteractiveButton1').style.visibility = "hidden";
            document.getElementById('circleInteractiveButton2').style.visibility = "hidden";
            document.getElementById('InteractivityArrowRight').style.visibility = "hidden";
            document.getElementById('InteractivityArrowLeft').style.visibility = "hidden";
            document.getElementById('circleInteractiveText1').style.visibility = "hidden";
            document.getElementById('circleInteractiveText2').style.visibility = "hidden";
            document.getElementById('simulatorInteractiveText2').style.visibility = "hidden";
            document.getElementById('InteractivityBackButton1').style.visibility = "visible";

            const InteractivityBackButton1Variable = document.getElementById('InteractivityBackButton1');
            const questionImage1ContainerSimulatorZoneVariable = document.getElementById("questionImageContainerSimulatorZone1");
            const simulatorInteractiveText1Variable = document.getElementById("simulatorInteractiveText1");
            document.getElementById("questionImageContainerSimulatorZone1").src = "images/simulation_zone/Sim-Zone-Image.png";
            questionImage1ContainerSimulatorZoneVariable.setAttribute("style", "position:fixed;top:25%;left:20%;width:50%;height:40%;z-index: 0;visibility: visible;");
            InteractivityBackButton1Variable.setAttribute("style", "position:fixed;top:12%;left:90%;visibility: visible;");
            document.getElementById('simulatorInteractiveText1').style.visibility = "visible";
            document.getElementById('simulatorInteractiveText1').innerHTML = "Add Simulation Action text here.";
            insideSimulatorAction1 = true;

            if (!SimZoneSkills1AddedtoBar) {
                UserSimZoneSkillsValue = UserSimZoneSkillsValue + userSimZoneOffset;
                OverallSimZoneSkillsValue = OverallSimZoneSkillsValue + overallSimZoneOffset;
                SimZoneSkills1AddedtoBar = true;
            }


            var addedToSZArray = false;
            if (!addedToSZArray && !simulatorZoneAnswersArray.includes("#Role:2,Level:2,buttonID:1#")) {
                simulatorZoneAnswersArray.push("#Role:2,Level:2,buttonID:1#");
                simulatorZoneAnswersString = simulatorZoneAnswersString.concat("#buttonID:1#");
                addedToSZArray = true;
            }

        } else if (buttonID == 2) {


            document.getElementById('circleInteractiveButton1').style.visibility = "hidden";
            document.getElementById('circleInteractiveButton2').style.visibility = "hidden";

            document.getElementById('InteractivityArrowRight').style.visibility = "hidden";
            document.getElementById('InteractivityArrowLeft').style.visibility = "hidden";
            document.getElementById('circleInteractiveText1').style.visibility = "hidden";
            document.getElementById('circleInteractiveText2').style.visibility = "hidden";
            document.getElementById('simulatorInteractiveText2').style.visibility = "hidden";
            document.getElementById('InteractivityBackButton1').style.visibility = "visible";

            const questionImage1ContainerSimulatorZoneVariable = document.getElementById("questionImageContainerSimulatorZone1");
            const simulatorInteractiveText1Variable = document.getElementById("simulatorInteractiveText1");
            const InteractivityBackButton1Variable = document.getElementById('InteractivityBackButton1');

            document.getElementById("questionImageContainerSimulatorZone1").src = "images/simulation_zone/Sim-Zone-Image.png";
            questionImage1ContainerSimulatorZoneVariable.setAttribute("style", "position:fixed;top:25%;left:20%;width:50%;height:40%;z-index: 0;visibility: visible;");
            document.getElementById('simulatorInteractiveText1').style.visibility = "visible";

            document.getElementById('simulatorInteractiveText1').innerHTML = "Add Simulation Action text here.";

            simulatorInteractiveText1Variable.setAttribute("style", "position:fixed;top:82%;left:30%;width:auto;font-size: 2vw;background-color: #435274;");
            InteractivityBackButton1Variable.setAttribute("style", "position:fixed;top:12%;left:88%;visibility: visible;");
            insideSimulatorAction2 = true;

            if (!SimZoneSkills2AddedtoBar) {
                UserSimZoneSkillsValue = UserSimZoneSkillsValue + userSimZoneOffset;
                OverallSimZoneSkillsValue = OverallSimZoneSkillsValue + overallSimZoneOffset;
                SimZoneSkills2AddedtoBar = true;
            }

            var addedToSZArray = false;
            if (!addedToSZArray && !simulatorZoneAnswersArray.includes("#Role:2,Level:2,buttonID:2#")) {
                simulatorZoneAnswersArray.push("#Role:2,Level:2,buttonID:2#");
                simulatorZoneAnswersString = simulatorZoneAnswersString.concat("#buttonID:2#");
                addedToSZArray = true;
            }
        }
    }

}


function openPlayerStatsZone(level) {

    if (level == "Ingame-Level") {

        if (roleId == 0) {
            tabSelected('Attacker');
            const affirmativeFeedbackAttackerInGame = document.getElementById('playerstatboard-skills-affirmative-box-text');
            affirmativeFeedbackAttackerInGame.innerText = affirmativeAttackerProgressFeedbackList[Math.floor(Math.random() * affirmativeAttackerProgressFeedbackList.length)];
            affirmativeFeedbackAttackerInGame.setAttribute("style", "position:fixed;top:10%;left:30%;width:45%;font-size:1.6vw;z-index:2;font-weight:bold;word-wrap:break-word;");

            const personalizedFeedbackAttackerInGame = document.getElementById('playerstatboard-feedback-box-text');
            personalizedFeedbackAttackerInGame.innerText = levelAttackerProgressFeedbackList[Math.floor(Math.random() * levelAttackerProgressFeedbackList.length)];
            personalizedFeedbackAttackerInGame.setAttribute("style", "position:fixed;top:48%;left:27%;width: 50%;color: #f9f6f6;font-size: 2vw;z-index: 1;font-weight: bold;");

        }

        if (roleId == 1) {
            tabSelected('Defender');
            const affirmativeFeedbackDefenderInGame = document.getElementById('playerstatboard-skills-affirmative-box-text');
            affirmativeFeedbackDefenderInGame.innerText = affirmativeDefenderProgressFeedbackList[Math.floor(Math.random() * affirmativeDefenderProgressFeedbackList.length)];
            affirmativeFeedbackDefenderInGame.setAttribute("style", "position:fixed;top:10%;left:30%;width:45%;font-size:1.6vw;z-index:2;font-weight:bold;word-wrap:break-word;");

            const personalizedFeedbackDefenderInGame = document.getElementById('playerstatboard-feedback-box-text');
            personalizedFeedbackDefenderInGame.innerText = levelDefenderProgressFeedbackList[Math.floor(Math.random() * levelDefenderProgressFeedbackList.length)];
            personalizedFeedbackDefenderInGame.setAttribute("style", "position:fixed;top:48%;left:27%;width: 50%;color: #f9f6f6;font-size: 2vw;z-index: 1;font-weight: bold;");

        }

        if (roleId == 2) {
            tabSelected('User');
            const affirmativeFeedbackUserInGame = document.getElementById('playerstatboard-skills-affirmative-box-text');
            affirmativeFeedbackUserInGame.innerText = affirmativeUserProgressFeedbackList[Math.floor(Math.random() * affirmativeUserProgressFeedbackList.length)];
            affirmativeFeedbackUserInGame.setAttribute("style", "position:fixed;top:10%;left:30%;width:45%;font-size:1.6vw;z-index:2;font-weight:bold;word-wrap:break-word;");

            const personalizedFeedbackUserInGame = document.getElementById('playerstatboard-feedback-box-text');
            personalizedFeedbackUserInGame.innerText = levelUserProgressFeedbackList[Math.floor(Math.random() * levelUserProgressFeedbackList.length)];
            personalizedFeedbackUserInGame.setAttribute("style", "position:fixed;top:48%;left:27%;width: 50%;color: #f9f6f6;font-size: 2vw;z-index: 1;font-weight: bold;");

        }

    }


    if (level == "Attacker-Completed") {
        tabSelected('Attacker');
        const affirmativeFeedbackAttackerCompleted = document.getElementById('playerstatboard-skills-affirmative-box-text');
        affirmativeFeedbackAttackerCompleted.innerText = affirmativeAttackerFeedbackList[Math.floor(Math.random() * affirmativeAttackerFeedbackList.length)];
        affirmativeFeedbackAttackerCompleted.setAttribute("style", "position:fixed;top:10%;left:30%;width:45%;font-size:1.6vw;z-index:2;font-weight:bold;word-wrap:break-word;");
        tabSelectedAffirmativeAttacker = affirmativeAttackerFeedbackList[Math.floor(Math.random() * affirmativeAttackerFeedbackList.length)];




        if (incorrectAttackerAnswersList.includes("R0L1Q1A1") || incorrectAttackerAnswersList.includes("R0L1Q1A3") || !(correctAttackerAnswersList.includes("R0L1Q1A2") && correctAttackerAnswersList.includes("R0L1Q1A4"))) {


            if (suggestedRoleList.includes("Attacker")) {
                suggestedAttackerLevels = suggestedAttackerLevels.concat("Role 1");
                const index = suggestedRoleList.indexOf("Attacker");
                const x = suggestedRoleList.splice(index, 1);
            }
            suggestedAttackerLevels = suggestedAttackerLevels.concat(" L1 Q1,");

            if (!levelAttackerRefStoredDomXSSListAdded) {
                suggestedAttackerSteps = suggestedAttackerSteps.concat(levelAttackerRefStoredDomXSSList[Math.floor(Math.random() * levelAttackerRefStoredDomXSSList.length)]);
                levelAttackerRefStoredDomXSSListAdded = true;
            }
        }



        if (incorrectAttackerAnswersList.includes("R0L2Q1A4") || !(correctAttackerAnswersList.includes("R0L2Q1A1") && correctAttackerAnswersList.includes("R0L2Q1A2") && correctAttackerAnswersList.includes("R0L2Q1A3"))) {

            if (suggestedRoleList.includes("Attacker")) {
                suggestedAttackerLevels = suggestedAttackerLevels.concat("Role 1");
                const index = suggestedRoleList.indexOf("Attacker");
                const x = suggestedRoleList.splice(index, 1);
            }
            suggestedAttackerLevels = suggestedAttackerLevels.concat(" L1 Q2,");

            if (!levelAttackerXSSEffectsListAdded) {
                suggestedAttackerSteps = suggestedAttackerSteps.concat(levelAttackerXSSEffectsList[Math.floor(Math.random() * levelAttackerXSSEffectsList.length)]);
                levelAttackerXSSEffectsListAdded = true;
            }

        }



        if (!(correctAttackerAnswersList.includes("R0L3Q1A1") && correctAttackerAnswersList.includes("R0L3Q1A2") && correctAttackerAnswersList.includes("R0L3Q1A3") && correctAttackerAnswersList.includes("R0L3Q1A4"))) {

            if (suggestedRoleList.includes("Attacker")) {
                suggestedAttackerLevels = suggestedAttackerLevels.concat("Role 1");
                const index = suggestedRoleList.indexOf("Attacker");
                const x = suggestedRoleList.splice(index, 1);
            }
            suggestedAttackerLevels = suggestedAttackerLevels.concat(" L1 Q3,");

            if (!levelAttackerXSSEffectsListAdded) {
                suggestedAttackerSteps = suggestedAttackerSteps.concat(levelAttackerXSSEffectsList[Math.floor(Math.random() * levelAttackerXSSEffectsList.length)]);
                levelAttackerXSSEffectsListAdded = true;
            }

        }



        if (incorrectAttackerAnswersList.includes("R0L4Q1A1") || incorrectAttackerAnswersList.includes("R0L4Q1A2") || !(correctAttackerAnswersList.includes("R0L4Q1A3") && correctAttackerAnswersList.includes("R0L4Q1A4"))) {

            if (suggestedRoleList.includes("Attacker")) {
                suggestedAttackerLevels = suggestedAttackerLevels.concat("Role 1");
                const index = suggestedRoleList.indexOf("Attacker");
                const x = suggestedRoleList.splice(index, 1);
            }
            suggestedAttackerLevels = suggestedAttackerLevels.concat(" L2 Q1,");

            if (!levelAttackerRefStoredDomXSSListAdded) {
                suggestedAttackerSteps = suggestedAttackerSteps.concat(levelAttackerRefStoredDomXSSList[Math.floor(Math.random() * levelAttackerRefStoredDomXSSList.length)]);
                levelAttackerRefStoredDomXSSListAdded = true;
            }


        }


        if (incorrectAttackerAnswersList.includes("R0L5Q1A4") || !(correctAttackerAnswersList.includes("R0L5Q1A1") && correctAttackerAnswersList.includes("R0L5Q1A2") && correctAttackerAnswersList.includes("R0L5Q1A3"))) {

            if (suggestedRoleList.includes("Attacker")) {
                suggestedAttackerLevels = suggestedAttackerLevels.concat("Role 1");
                const index = suggestedRoleList.indexOf("Attacker");
                const x = suggestedRoleList.splice(index, 1);
            }
            suggestedAttackerLevels = suggestedAttackerLevels.concat(" L2 Q2,");

            if (!levelAttackerXSSEffectsListAdded) {
                suggestedAttackerSteps = suggestedAttackerSteps.concat(levelAttackerXSSEffectsList[Math.floor(Math.random() * levelAttackerXSSEffectsList.length)]);
                levelAttackerXSSEffectsListAdded = true;
            }

        }



        if (incorrectAttackerAnswersList.includes("R0L6Q1A4") || incorrectAttackerAnswersList.includes("R0L6Q1A2") || !(correctAttackerAnswersList.includes("R0L6Q1A1") && correctAttackerAnswersList.includes("R0L6Q1A3"))) {

            if (suggestedRoleList.includes("Attacker")) {
                suggestedAttackerLevels = suggestedAttackerLevels.concat("Role 1");
                const index = suggestedRoleList.indexOf("Attacker");
                const x = suggestedRoleList.splice(index, 1);
            }
            suggestedAttackerLevels = suggestedAttackerLevels.concat(" L2 Q3,");

            if (!levelAttackerRefStoredDomXSSListAdded) {
                suggestedAttackerSteps = suggestedAttackerSteps.concat(levelAttackerRefStoredDomXSSList[Math.floor(Math.random() * levelAttackerRefStoredDomXSSList.length)]);
                levelAttackerRefStoredDomXSSListAdded = true;
            }

        }


        if (incorrectAttackerAnswersList.includes("R0L7Q1A4") || !(correctAttackerAnswersList.includes("R0L7Q1A1") && correctAttackerAnswersList.includes("R0L7Q1A2") && correctAttackerAnswersList.includes("R0L7Q1A3"))) {


            if (suggestedRoleList.includes("Attacker")) {
                suggestedAttackerLevels = suggestedAttackerLevels.concat("Role 1");
                const index = suggestedRoleList.indexOf("Attacker");
                const x = suggestedRoleList.splice(index, 1);
            }
            suggestedAttackerLevels = suggestedAttackerLevels.concat(" L3 Q1,");

            if (!levelAttackerRefStoredDomXSSListAdded) {
                suggestedAttackerSteps = suggestedAttackerSteps.concat(levelAttackerRefStoredDomXSSList[Math.floor(Math.random() * levelAttackerRefStoredDomXSSList.length)]);
                levelAttackerRefStoredDomXSSListAdded = true;
            }
        }


        if (incorrectAttackerAnswersList.includes("R0L8Q1A3") || !(correctAttackerAnswersList.includes("R0L8Q1A1") && correctAttackerAnswersList.includes("R0L8Q1A2") && correctAttackerAnswersList.includes("R0L8Q1A4"))) {

            if (suggestedRoleList.includes("Attacker")) {
                suggestedAttackerLevels = suggestedAttackerLevels.concat("Role 1");
                const index = suggestedRoleList.indexOf("Attacker");
                const x = suggestedRoleList.splice(index, 1);
            }
            suggestedAttackerLevels = suggestedAttackerLevels.concat(" L3 Q2,");

            if (!levelAttackerDOMResourcesListAdded) {
                suggestedAttackerSteps = suggestedAttackerSteps.concat(levelAttackerDOMResourcesList[Math.floor(Math.random() * levelAttackerDOMResourcesList.length)]);
                levelAttackerDOMResourcesListAdded = true;
            }
        }


        if (incorrectAttackerAnswersList.includes("R0L9Q1A1") || incorrectAttackerAnswersList.includes("R0L9Q1A2") || !(correctAttackerAnswersList.includes("R0L9Q1A3") && correctAttackerAnswersList.includes("R0L9Q1A4"))) {

            if (suggestedRoleList.includes("Attacker")) {
                suggestedAttackerLevels = suggestedAttackerLevels.concat("Attacker");
                const index = suggestedRoleList.indexOf("Attacker");
                const x = suggestedRoleList.splice(index, 1);
            }
            suggestedAttackerLevels = suggestedAttackerLevels.concat(" L3 Q3,");

            if (!levelAttackerRefStoredDomXSSListAdded) {
                suggestedAttackerSteps = suggestedAttackerSteps.concat(levelAttackerRefStoredDomXSSList[Math.floor(Math.random() * levelAttackerRefStoredDomXSSList.length)]);
                levelAttackerRefStoredDomXSSListAdded = true;
            }

        }


        if (incorrectAttackerAnswersList.length > 0 || correctAttackerAnswersList.length < 24) {
            const personalizedFeedbackAttackerCompletedWithErrors = document.getElementById('playerstatboard-feedback-box-text');
            personalizedFeedbackAttackerCompletedWithErrors.innerText = suggestedAttackerSteps + "\n You can replay the following levels to polish these skills, \n" + suggestedAttackerLevels;
            personalizedFeedbackAttackerCompletedWithErrors.setAttribute("style", "position:fixed;top:30%;left:27%;width: 50%;color: #f9f6f6;font-size: 0.92vw;z-index: 1;font-weight: bold;");
            tabSelectedAttacker = suggestedAttackerSteps + "\n You can replay the following levels to polish these skills, \n" + suggestedAttackerLevels;
        } else if (incorrectAttackerAnswersList.length == 0 && correctAttackerAnswersList.length == 24) {
            const personalizedFeedbackAttackerCompletedFlawless = document.getElementById('playerstatboard-feedback-box-text');
            personalizedFeedbackAttackerCompletedFlawless.innerText = levelAttackerFlawlessCompletionList[Math.floor(Math.random() * levelAttackerFlawlessCompletionList.length)];
            personalizedFeedbackAttackerCompletedFlawless.setAttribute("style", "position:fixed;top:30%;left:27%;width: 50%;color: #f9f6f6;font-size: 2vw;z-index: 1;font-weight: bold;");
            tabSelectedAttacker = levelAttackerFlawlessCompletionList[Math.floor(Math.random() * levelAttackerFlawlessCompletionList.length)];
        }

    } else if (level == "Defender-Completed") {
        tabSelected('Defender');
        const affirmativeFeedbackDefenderCompleted = document.getElementById('playerstatboard-skills-affirmative-box-text');
        affirmativeFeedbackDefenderCompleted.innerText = affirmativeDefenderFeedbackList[Math.floor(Math.random() * affirmativeDefenderFeedbackList.length)];
        affirmativeFeedbackDefenderCompleted.setAttribute("style", "position:fixed;top:10%;left:30%;width:45%;font-size:1.6vw;z-index:2;font-weight:bold;word-wrap:break-word;");
        tabSelectedAffirmativeDefender = affirmativeDefenderFeedbackList[Math.floor(Math.random() * affirmativeDefenderFeedbackList.length)];




        if (incorrectDefenderAnswersList.includes("R1L1Q1A2") || incorrectDefenderAnswersList.includes("R1L1Q1A4") || !(correctDefenderAnswersList.includes("R1L1Q1A1") && correctDefenderAnswersList.includes("R1L1Q1A3"))) {


            if (suggestedRoleList.includes("Defender")) {
                suggestedDefenderLevels = suggestedDefenderLevels.concat("Role 2");
                const index = suggestedRoleList.indexOf("Defender");
                const x = suggestedRoleList.splice(index, 1);
            }
            suggestedDefenderLevels = suggestedDefenderLevels.concat(" L1 Q1,");

            if (!levelDefenderRefStoredDomXSSListAdded) {
                suggestedDefenderSteps = suggestedDefenderSteps.concat(levelDefenderRefStoredDomXSSList[Math.floor(Math.random() * levelDefenderRefStoredDomXSSList.length)]);
                levelDefenderRefStoredDomXSSListAdded = true;
            }
        }



        if (incorrectDefenderAnswersList.includes("R1L2Q1A1") || incorrectDefenderAnswersList.includes("R1L2Q1A2") || !(correctDefenderAnswersList.includes("R1L2Q1A3") && correctDefenderAnswersList.includes("R1L2Q1A4"))) {


            if (suggestedRoleList.includes("Defender")) {
                suggestedDefenderLevels = suggestedDefenderLevels.concat("Role 2");
                const index = suggestedRoleList.indexOf("Defender");
                const x = suggestedRoleList.splice(index, 1);
            }
            suggestedDefenderLevels = suggestedDefenderLevels.concat(" L1 Q2,");

            if (!levelDefenderRefStoredDomXSSListAdded) {
                suggestedDefenderSteps = suggestedDefenderSteps.concat(levelDefenderRefStoredDomXSSList[Math.floor(Math.random() * levelDefenderRefStoredDomXSSList.length)]);
                levelDefenderRefStoredDomXSSListAdded = true;
            }

            if (!levelDefenderInputEscapeXSSListAdded) {
                suggestedDefenderSteps = suggestedDefenderSteps.concat(levelDefenderInputEscapeXSSList[Math.floor(Math.random() * levelDefenderInputEscapeXSSList.length)]);
                levelDefenderInputEscapeXSSListAdded = true;
            }
        }



        if (incorrectDefenderAnswersList.includes("R1L3Q1A4") || !(correctDefenderAnswersList.includes("R1L3Q1A1") && correctDefenderAnswersList.includes("R1L3Q1A2") && correctDefenderAnswersList.includes("R1L3Q1A3"))) {


            if (suggestedRoleList.includes("Defender")) {
                suggestedDefenderLevels = suggestedDefenderLevels.concat("Role 2");
                const index = suggestedRoleList.indexOf("Defender");
                const x = suggestedRoleList.splice(index, 1);
            }
            suggestedDefenderLevels = suggestedDefenderLevels.concat(" L2 Q1,");

            if (!levelDefenderRefStoredDomXSSListAdded) {
                suggestedDefenderSteps = suggestedDefenderSteps.concat(levelDefenderRefStoredDomXSSList[Math.floor(Math.random() * levelDefenderRefStoredDomXSSList.length)]);
                levelDefenderRefStoredDomXSSListAdded = true;
            }

            if (!levelDefenderInputEscapeXSSListAdded) {
                suggestedDefenderSteps = suggestedDefenderSteps.concat(levelDefenderInputEscapeXSSList[Math.floor(Math.random() * levelDefenderInputEscapeXSSList.length)]);
                levelDefenderInputEscapeXSSListAdded = true;
            }

            if (!levelDefenderProtectXSSListAdded) {
                suggestedDefenderSteps = suggestedDefenderSteps.concat(levelDefenderProtectXSSList[Math.floor(Math.random() * levelDefenderProtectXSSList.length)]);
                levelDefenderProtectXSSListAdded = true;
            }
        }




        if (incorrectDefenderAnswersList.includes("R1L4Q1A4") || !(correctDefenderAnswersList.includes("R1L4Q1A1") && correctDefenderAnswersList.includes("R1L4Q1A2") && correctDefenderAnswersList.includes("R1L4Q1A3"))) {


            if (suggestedRoleList.includes("Defender")) {
                suggestedDefenderLevels = suggestedDefenderLevels.concat("Role 2");
                const index = suggestedRoleList.indexOf("Defender");
                const x = suggestedRoleList.splice(index, 1);
            }
            suggestedDefenderLevels = suggestedDefenderLevels.concat(" L2 Q2,");

            if (!levelDefenderDOMResourcesListAdded) {
                suggestedDefenderSteps = suggestedDefenderSteps.concat(levelDefenderDOMResourcesList[Math.floor(Math.random() * levelDefenderDOMResourcesList.length)]);
                levelDefenderDOMResourcesListAdded = true;
            }

            if (!levelDefenderInputEscapeXSSListAdded) {
                suggestedDefenderSteps = suggestedDefenderSteps.concat(levelDefenderInputEscapeXSSList[Math.floor(Math.random() * levelDefenderInputEscapeXSSList.length)]);
                levelDefenderInputEscapeXSSListAdded = true;
            }

            if (!levelDefenderProtectXSSListAdded) {
                suggestedDefenderSteps = suggestedDefenderSteps.concat(levelDefenderProtectXSSList[Math.floor(Math.random() * levelDefenderProtectXSSList.length)]);
                levelDefenderProtectXSSListAdded = true;
            }
        }



        if (incorrectDefenderAnswersList.includes("R1L5Q1A3") || incorrectDefenderAnswersList.includes("R1L5Q1A4") || !(correctDefenderAnswersList.includes("R1L5Q1A1") && correctDefenderAnswersList.includes("R1L5Q1A2"))) {


            if (suggestedRoleList.includes("Defender")) {
                suggestedDefenderLevels = suggestedDefenderLevels.concat("Role 2");
                const index = suggestedRoleList.indexOf("Defender");
                const x = suggestedRoleList.splice(index, 1);
            }
            suggestedDefenderLevels = suggestedDefenderLevels.concat(" L3 Q1,");


            if (!levelDefenderProtectXSSListAdded) {
                suggestedDefenderSteps = suggestedDefenderSteps.concat(levelDefenderProtectXSSList[Math.floor(Math.random() * levelDefenderProtectXSSList.length)]);
                levelDefenderProtectXSSListAdded = true;
            }
        }




        if (incorrectDefenderAnswersList.includes("R1L6Q1A2") || incorrectDefenderAnswersList.includes("R1L6Q1A3") || !(correctDefenderAnswersList.includes("R1L6Q1A1") && correctDefenderAnswersList.includes("R1L6Q1A4"))) {


            if (suggestedRoleList.includes("Defender")) {
                suggestedDefenderLevels = suggestedDefenderLevels.concat("Role 2");
                const index = suggestedRoleList.indexOf("Defender");
                const x = suggestedRoleList.splice(index, 1);
            }
            suggestedDefenderLevels = suggestedDefenderLevels.concat(" L3 Q2,");


            if (!levelDefenderInputEscapeXSSListAdded) {
                suggestedDefenderSteps = suggestedDefenderSteps.concat(levelDefenderInputEscapeXSSList[Math.floor(Math.random() * levelDefenderInputEscapeXSSList.length)]);
                levelDefenderInputEscapeXSSListAdded = true;
            }

            if (!levelDefenderProtectXSSListAdded) {
                suggestedDefenderSteps = suggestedDefenderSteps.concat(levelDefenderProtectXSSList[Math.floor(Math.random() * levelDefenderProtectXSSList.length)]);
                levelDefenderProtectXSSListAdded = true;
            }
        }

        if (incorrectDefenderAnswersList.length > 0 || correctDefenderAnswersList.length < 14) {
            const personalizedFeedbackDefenderCompletedWithErrors = document.getElementById('playerstatboard-feedback-box-text');
            personalizedFeedbackDefenderCompletedWithErrors.innerText = suggestedDefenderSteps + "\n You can replay the following levels to polish these skills, \n" + suggestedDefenderLevels;
            personalizedFeedbackDefenderCompletedWithErrors.setAttribute("style", "position:fixed;top:30%;left:27%;width: 50%;color: #f9f6f6;font-size: 0.92vw;z-index: 1;font-weight: bold;");
            tabSelectedDefender = suggestedDefenderSteps + "\n You can replay the following levels to polish these skills, \n" + suggestedDefenderLevels;
        } else if (incorrectDefenderAnswersList.length == 0 && correctDefenderAnswersList.length == 14) {
            const personalizedFeedbackDefenderCompletedFlawless = document.getElementById('playerstatboard-feedback-box-text');
            personalizedFeedbackDefenderCompletedFlawless.innerText = levelDefenderFlawlessCompletionList[Math.floor(Math.random() * levelDefenderFlawlessCompletionList.length)];
            personalizedFeedbackDefenderCompletedFlawless.setAttribute("style", "position:fixed;top:30%;left:27%;width: 50%;color: #f9f6f6;font-size: 2vw;z-index: 1;font-weight: bold;");
            tabSelectedDefender = levelDefenderFlawlessCompletionList[Math.floor(Math.random() * levelDefenderFlawlessCompletionList.length)];
        }




    } else if (level == "User-Completed") {
        tabSelected('User');
        const affirmativeFeedbackUserCompleted = document.getElementById('playerstatboard-skills-affirmative-box-text');
        affirmativeFeedbackUserCompleted.innerText = affirmativeUserFeedbackList[Math.floor(Math.random() * affirmativeUserFeedbackList.length)];
        affirmativeFeedbackUserCompleted.setAttribute("style", "position:fixed;top:10%;left:30%;width:45%;font-size:1.6vw;z-index:2;font-weight:bold;word-wrap:break-word;");
        tabSelectedAffirmativeUser = affirmativeUserFeedbackList[Math.floor(Math.random() * affirmativeUserFeedbackList.length)];



        if (incorrectUserAnswersList.includes("R2L1Q1A1") || incorrectUserAnswersList.includes("R2L1Q1A2") || !(correctUserAnswersList.includes("R2L1Q1A3") && correctUserAnswersList.includes("R2L1Q1A4"))) {


            if (suggestedRoleList.includes("User")) {
                suggestedUserLevels = suggestedUserLevels.concat("Role 3");
                const index = suggestedRoleList.indexOf("User");
                const x = suggestedRoleList.splice(index, 1);
            }
            suggestedUserLevels = suggestedUserLevels.concat(" L1 Q1,");


            if (!levelUserRefStoredDomXSSListAdded) {
                suggestedUserSteps = suggestedUserSteps.concat(levelUserRefStoredDomXSSList[Math.floor(Math.random() * levelUserRefStoredDomXSSList.length)]);
                levelUserRefStoredDomXSSListAdded = true;
            }

        }


        if (incorrectUserAnswersList.includes("R2L2Q1A1") || incorrectUserAnswersList.includes("R2L2Q1A2") || !(correctUserAnswersList.includes("R2L2Q1A3") && correctUserAnswersList.includes("R2L2Q1A4"))) {


            if (suggestedRoleList.includes("User")) {
                suggestedUserLevels = suggestedUserLevels.concat("Role 3");
                const index = suggestedRoleList.indexOf("User");
                const x = suggestedRoleList.splice(index, 1);
            }
            suggestedUserLevels = suggestedUserLevels.concat(" L1 Q2,");


            if (!levelUserProtectXSSListAdded) {
                suggestedUserSteps = suggestedUserSteps.concat(levelUserProtectXSSList[Math.floor(Math.random() * levelUserProtectXSSList.length)]);
                levelUserProtectXSSListAdded = true;
            }

        }


        if (incorrectUserAnswersList.includes("R2L3Q1A1") || incorrectUserAnswersList.includes("R2L3Q1A4") || !(correctUserAnswersList.includes("R2L3Q1A2") && correctUserAnswersList.includes("R2L3Q1A3"))) {


            if (suggestedRoleList.includes("User")) {
                suggestedUserLevels = suggestedUserLevels.concat("Role 3");
                const index = suggestedRoleList.indexOf("User");
                const x = suggestedRoleList.splice(index, 1);
            }
            suggestedUserLevels = suggestedUserLevels.concat(" L2 Q1,");


            if (!levelUserProtectXSSListAdded) {
                suggestedUserSteps = suggestedUserSteps.concat(levelUserProtectXSSList[Math.floor(Math.random() * levelUserProtectXSSList.length)]);
                levelUserProtectXSSListAdded = true;
            }

            if (!levelUserRefStoredDomXSSListAdded) {
                suggestedUserSteps = suggestedUserSteps.concat(levelUserRefStoredDomXSSList[Math.floor(Math.random() * levelUserRefStoredDomXSSList.length)]);
                levelUserRefStoredDomXSSListAdded = true;
            }

        }


        if (incorrectUserAnswersList.includes("R2L4Q1A2") || incorrectUserAnswersList.includes("R2L4Q1A3") || !(correctUserAnswersList.includes("R2L4Q1A1") && correctUserAnswersList.includes("R2L4Q1A4"))) {


            if (suggestedRoleList.includes("User")) {
                suggestedUserLevels = suggestedUserLevels.concat("Role 3");
                const index = suggestedRoleList.indexOf("User");
                const x = suggestedRoleList.splice(index, 1);
            }
            suggestedUserLevels = suggestedUserLevels.concat(" L2 Q2,");


            if (!levelUserProtectXSSListAdded) {
                suggestedUserSteps = suggestedUserSteps.concat(levelUserProtectXSSList[Math.floor(Math.random() * levelUserProtectXSSList.length)]);
                levelUserProtectXSSListAdded = true;
            }

            if (!levelUserRefStoredDomXSSListAdded) {
                suggestedUserSteps = suggestedUserSteps.concat(levelUserRefStoredDomXSSList[Math.floor(Math.random() * levelUserRefStoredDomXSSList.length)]);
                levelUserRefStoredDomXSSListAdded = true;
            }

        }

        if (incorrectUserAnswersList.length > 0 || correctUserAnswersList.length < 8) {

            const personalizedFeedbackUserCompletedWithErrors = document.getElementById('playerstatboard-feedback-box-text');
            personalizedFeedbackUserCompletedWithErrors.innerText = suggestedUserSteps + "\n You can replay the following levels to polish these skills, \n" + suggestedUserLevels;
            personalizedFeedbackUserCompletedWithErrors.setAttribute("style", "position:fixed;top:30%;left:27%;width: 50%;color: #f9f6f6;font-size: 0.92vw;z-index: 1;font-weight: bold;");
            tabSelectedUser = suggestedUserSteps + "\n You can replay the following levels to polish these skills, \n" + suggestedUserLevels;
        } else if (incorrectUserAnswersList.length == 0 && correctUserAnswersList.length == 8) {
            const personalizedFeedbackUserCompletedFlawless = document.getElementById('playerstatboard-feedback-box-text');
            personalizedFeedbackUserCompletedFlawless.innerText = levelUserFlawlessCompletionList[Math.floor(Math.random() * levelUserFlawlessCompletionList.length)];
            personalizedFeedbackUserCompletedFlawless.setAttribute("style", "position:fixed;top:30%;left:27%;width: 50%;color: #f9f6f6;font-size: 2vw;z-index: 1;font-weight: bold;");
            tabSelectedUser = levelUserFlawlessCompletionList[Math.floor(Math.random() * levelUserFlawlessCompletionList.length)];
        }



    } else if (level == "TXG-Completed") {
        tabSelected('Overall');
        const affirmativeFeedbackTXGCompleted = document.getElementById('playerstatboard-skills-affirmative-box-text');
        affirmativeFeedbackTXGCompleted.innerText = affirmativeOverallFeedbackList[Math.floor(Math.random() * affirmativeOverallFeedbackList.length)];
        affirmativeFeedbackTXGCompleted.setAttribute("style", "position:fixed;top:10%;left:30%;width:45%;font-size:1.6vw;z-index:2;font-weight:bold;word-wrap:break-word;");

    }

    const playerNameInGameId = document.getElementById('playerNameInGame-statboard');
    const playerAvatarInGameId = document.getElementById('playerAvatarInGame-statboard');
    const playerScore = document.getElementById('playerScoreInGame-statboard');
    const playerScoreInGame = document.getElementById('playerScoreInGame-statboard');
    playerScoreInGame.innerText = document.getElementById('playerScoreInGame').innerText;

    playerNameInGameId.innerText = playerName;



    fm1.setPercentage(0 + ((levelsCompleted.length + 1) * levelMultiplier));


    if (avatarId == 0) {
        playerAvatarInGameId.src = "images/avatars/avatar0.png";
    } else if (avatarId == 1) {
        playerAvatarInGameId.src = "images/avatars/avatar1.png";
    } else if (avatarId == 2) {
        playerAvatarInGameId.src = "images/avatars/avatar2.png";
    } else if (avatarId == 3) {
        playerAvatarInGameId.src = "images/avatars/avatar3.png";
    } else if (avatarId == 4) {
        playerAvatarInGameId.src = "images/avatars/avatar4.png";
    } else if (avatarId == 5) {
        playerAvatarInGameId.src = "images/avatars/avatar5.png";
    }
    $('div#playerStatsPopUp').show();


}

function closePlayerStatsZone() {
    $('div#playerStatsPopUp').hide();
}

function closeSimulatorZone() {
    startLevelTimer();
    closeSimulatorZoneTimer();
    initialSimulatorZoneTimerStarted = false;
    $('div#interactivityZonePopUp1').hide();
    document.getElementById('circleInteractiveButton1').style.visibility = "hidden";
    document.getElementById('circleInteractiveButton2').style.visibility = "hidden";
    document.getElementById('InteractivityArrowRight').style.visibility = "hidden";
    document.getElementById('InteractivityArrowLeft').style.visibility = "hidden";
    document.getElementById('InteractivityBackButton1').style.visibility = "hidden";
    document.getElementById('circleInteractiveText1').style.visibility = "hidden";
    document.getElementById('circleInteractiveText2').style.visibility = "hidden";
    document.getElementById('simulatorInteractiveText1').style.visibility = "hidden";
    document.getElementById('simulatorInteractiveText2').style.visibility = "hidden";
    document.getElementById('XSSCheckBoxAttackerReflected').style.visibility = "hidden";
    document.getElementById('CheckButtonXSSAttackerReflected').style.visibility = "hidden";

    document.getElementById("Sim-Zone-Skills-Value").innerText = Math.ceil(OverallSimZoneSkillsValue);
    document.getElementById("video-progress-Sim-Zone-Skills-Progress").value = Math.ceil(OverallSimZoneSkillsValue);

}

function simulatorZoneTimer() {

    simulatorZoneTimeLimitInSeconds++;
    var minutes = Math.floor(simulatorZoneTimeLimitInSeconds / 60);
    var seconds = simulatorZoneTimeLimitInSeconds % 60;

    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    if (seconds < 10) {
        seconds = '0' + seconds;
    }

    simulatorZoneInsideTime = String(minutes) + ':' + String(seconds)

}

function startSimulatorZoneTimer() {
    timerSimulatorZoneInterval = setInterval(simulatorZoneTimer, 1000);

}


function closeSimulatorZoneTimer() {
    clearInterval(timerSimulatorZoneInterval);

}


function calculateTileOrder() {

    for (var a = [1, 2, 3, 4], i = a.length; i--;) {
        var random = a.splice(Math.floor(Math.random() * (i + 1)), 1)[0];
        tileLocations.push(random);
    }

}



function reorderQuestionTiles() {

    const tile1RandomAssignment = document.getElementById("question1Tile");
    const tile2RandomAssignment = document.getElementById("question2Tile");
    const tile3RandomAssignment = document.getElementById("question3Tile");
    const tile4RandomAssignment = document.getElementById("question4Tile");

    if (tileLocations[0] == 1) {
        tile1RandomAssignment.setAttribute("style", "position:fixed;left:1.5%;background-color: #41521F;");
    } else if (tileLocations[0] == 2) {

        tile1RandomAssignment.setAttribute("style", "position:fixed;left:26%;background-color: #6564DB;");
    } else if (tileLocations[0] == 3) {
        tile1RandomAssignment.setAttribute("style", "position:fixed;left:50.5%;background-color: #FF7F11;");
    } else if (tileLocations[0] == 4) {
        tile1RandomAssignment.setAttribute("style", "position:fixed;left:75%;background-color: #FF1B1C;");
    }


    if (tileLocations[1] == 1) {
        tile2RandomAssignment.setAttribute("style", "position:fixed;left:1.5%;background-color: #41521F;");
    } else if (tileLocations[1] == 2) {

        tile2RandomAssignment.setAttribute("style", "position:fixed;left:26%;background-color: #6564DB;");
    } else if (tileLocations[1] == 3) {
        tile2RandomAssignment.setAttribute("style", "position:fixed;left:50.5%;background-color: #FF7F11;");
    } else if (tileLocations[1] == 4) {
        tile2RandomAssignment.setAttribute("style", "position:fixed;left:75%;background-color: #FF1B1C;");
    }


    if (tileLocations[2] == 1) {
        tile3RandomAssignment.setAttribute("style", "position:fixed;left:1.5%;background-color: #41521F;");
    } else if (tileLocations[2] == 2) {

        tile3RandomAssignment.setAttribute("style", "position:fixed;left:26%;background-color: #6564DB;");
    } else if (tileLocations[2] == 3) {
        tile3RandomAssignment.setAttribute("style", "position:fixed;left:50.5%;background-color: #FF7F11;");
    } else if (tileLocations[2] == 4) {
        tile3RandomAssignment.setAttribute("style", "position:fixed;left:75%;background-color: #FF1B1C;");
    }

    if (tileLocations[3] == 1) {
        tile4RandomAssignment.setAttribute("style", "position:fixed;left:1.5%;background-color: #41521F;");
    } else if (tileLocations[3] == 2) {

        tile4RandomAssignment.setAttribute("style", "position:fixed;left:26%;background-color: #6564DB;");
    } else if (tileLocations[3] == 3) {
        tile4RandomAssignment.setAttribute("style", "position:fixed;left:50.5%;background-color: #FF7F11;");
    } else if (tileLocations[3] == 4) {
        tile4RandomAssignment.setAttribute("style", "position:fixed;left:75%;background-color: #FF1B1C;");
    }




}


function imageExists(image_url) {

    var http = new XMLHttpRequest();

    http.open('HEAD', image_url, false);
    http.send();

    return http.status != 404;

}


function displayAlertBox(text) {
    alert(text);
}


function tabSelected(role_name) {

    if (role_name == "Overall" && rolesPlayed.includes('Attacker') && rolesPlayed.includes('Defender') && rolesPlayed.includes('User')) {
        document.getElementById("overallTabSelected").style.backgroundColor = "red";
        document.getElementById("attackerTabSelected").style.backgroundColor = "black";
        document.getElementById("defenderTabSelected").style.backgroundColor = "black";
        document.getElementById("userTabSelected").style.backgroundColor = "black";

        document.getElementById("tabImage").src = "images/badges/overall-skills.png";

        document.getElementById("Ref-XSS-Skills-Value-stat-board").innerText = Math.ceil(OverallReflectedSkillsValue);
        document.getElementById("video-progress-Ref-XSS-overall-statboard").value = Math.ceil(OverallReflectedSkillsValue);
        document.getElementById("Stored-XSS-Skills-Value-stat-board").innerText = Math.ceil(OverallStoredSkillsValue);
        document.getElementById("video-progress-Stored-XSS-stat-board").value = Math.ceil(OverallStoredSkillsValue);
        document.getElementById("DOM-based-XSS-Skills-Value-stat-board").innerText = Math.ceil(OverallDOMBasedSkillsValue);
        document.getElementById("video-progress-DOM-based-XSS-stat-board").value = Math.ceil(OverallDOMBasedSkillsValue);
        document.getElementById("Sim-Zone-Skills-Value-stat-board").innerText = Math.ceil(OverallSimZoneSkillsValue);
        document.getElementById("video-progress-Sim-Zone-Skills-Progress-stat-board").value = Math.ceil(OverallSimZoneSkillsValue);

        const affirmativeFeedbackOverallCompleted = document.getElementById('playerstatboard-skills-affirmative-box-text');
        affirmativeFeedbackOverallCompleted.innerText = affirmativeOverallFeedbackList[Math.floor(Math.random() * affirmativeOverallFeedbackList.length)];
        affirmativeFeedbackOverallCompleted.setAttribute("style", "position:fixed;top:10%;left:30%;width:45%;font-size:1.6vw;z-index:2;font-weight:bold;word-wrap:break-word;visibility:visible;");

        const levelFeedbackOverallRolesCompleted = document.getElementById('playerstatboard-feedback-box-text');
        levelFeedbackOverallRolesCompleted.innerText = affirmativeOverallLearningFeedbackList[Math.floor(Math.random() * affirmativeOverallLearningFeedbackList.length)];
        levelFeedbackOverallRolesCompleted.setAttribute("style", "position:fixed;top:35%;left:27%;width: 50%;color: #f9f6f6;font-size: 1.6vw;z-index: 1;font-weight: bold;visibility:visible;");
    } else if (role_name == "Overall") {
        document.getElementById("overallTabSelected").style.backgroundColor = "red";
        document.getElementById("attackerTabSelected").style.backgroundColor = "black";
        document.getElementById("defenderTabSelected").style.backgroundColor = "black";
        document.getElementById("userTabSelected").style.backgroundColor = "black";

        document.getElementById("tabImage").src = "images/badges/overall-skills.png";

        document.getElementById("Ref-XSS-Skills-Value-stat-board").innerText = Math.ceil(OverallReflectedSkillsValue);
        document.getElementById("video-progress-Ref-XSS-overall-statboard").value = Math.ceil(OverallReflectedSkillsValue);
        document.getElementById("Stored-XSS-Skills-Value-stat-board").innerText = Math.ceil(OverallStoredSkillsValue);
        document.getElementById("video-progress-Stored-XSS-stat-board").value = Math.ceil(OverallStoredSkillsValue);
        document.getElementById("DOM-based-XSS-Skills-Value-stat-board").innerText = Math.ceil(OverallDOMBasedSkillsValue);
        document.getElementById("video-progress-DOM-based-XSS-stat-board").value = Math.ceil(OverallDOMBasedSkillsValue);
        document.getElementById("Sim-Zone-Skills-Value-stat-board").innerText = Math.ceil(OverallSimZoneSkillsValue);
        document.getElementById("video-progress-Sim-Zone-Skills-Progress-stat-board").value = Math.ceil(OverallSimZoneSkillsValue);

        const affirmativeFeedbackOverallInGame = document.getElementById('playerstatboard-skills-affirmative-box-text');
        affirmativeFeedbackOverallInGame.innerText = affirmativeOverallProgressFeedbackList[Math.floor(Math.random() * affirmativeOverallProgressFeedbackList.length)];
        affirmativeFeedbackOverallInGame.setAttribute("style", "position:fixed;top:10%;left:30%;width:45%;font-size:1.6vw;z-index:2;font-weight:bold;word-wrap:break-word;visibility:visible;");

        const levelFeedbackOverallInGame = document.getElementById('playerstatboard-feedback-box-text');
        levelFeedbackOverallInGame.innerText = affirmativeRoleProgressFeedbackList[Math.floor(Math.random() * affirmativeRoleProgressFeedbackList.length)];
        levelFeedbackOverallInGame.setAttribute("style", "position:fixed;top:35%;left:27%;width: 50%;color: #f9f6f6;font-size: 1.6vw;z-index: 1;font-weight: bold;visibility:visible;");

    }

    if (role_name == "Attacker" && rolesPlayed.includes('Attacker')) {
        document.getElementById("overallTabSelected").style.backgroundColor = "black";
        document.getElementById("attackerTabSelected").style.backgroundColor = "red";
        document.getElementById("defenderTabSelected").style.backgroundColor = "black";
        document.getElementById("userTabSelected").style.backgroundColor = "black";

        document.getElementById("tabImage").src = "images/badges/Role1-Skills.png";

        document.getElementById("Ref-XSS-Skills-Value-stat-board").innerText = Math.ceil(AttackerReflectedSkillsValue);
        document.getElementById("video-progress-Ref-XSS-overall-statboard").value = Math.ceil(AttackerReflectedSkillsValue);
        document.getElementById("Stored-XSS-Skills-Value-stat-board").innerText = Math.ceil(AttackerStoredSkillsValue);
        document.getElementById("video-progress-Stored-XSS-stat-board").value = Math.ceil(AttackerStoredSkillsValue);
        document.getElementById("DOM-based-XSS-Skills-Value-stat-board").innerText = Math.ceil(AttackerDOMBasedSkillsValue);
        document.getElementById("video-progress-DOM-based-XSS-stat-board").value = Math.ceil(AttackerDOMBasedSkillsValue);
        document.getElementById("Sim-Zone-Skills-Value-stat-board").innerText = Math.ceil(AttackerSimZoneSkillsValue);
        document.getElementById("video-progress-Sim-Zone-Skills-Progress-stat-board").value = Math.ceil(AttackerSimZoneSkillsValue);

        const personalizedFeedbackAttacker = document.getElementById('playerstatboard-feedback-box-text');
        personalizedFeedbackAttacker.innerText = tabSelectedAttacker;
        personalizedFeedbackAttacker.setAttribute("style", "position:fixed;top:30%;left:27%;width: 50%;color: #f9f6f6;font-size: 0.92vw;z-index: 1;font-weight: bold;visibility:visible;");

        const affirmativeFeedbackAttacker = document.getElementById('playerstatboard-skills-affirmative-box-text');
        affirmativeFeedbackAttacker.innerText = tabSelectedAffirmativeAttacker;
        affirmativeFeedbackAttacker.setAttribute("style", "position:fixed;top:10%;left:30%;width:45%;font-size:1.6vw;z-index:2;font-weight:bold;word-wrap:break-word;visibility:visible;");

    } else if (role_name == "Attacker") {
        document.getElementById("overallTabSelected").style.backgroundColor = "black";
        document.getElementById("attackerTabSelected").style.backgroundColor = "red";
        document.getElementById("defenderTabSelected").style.backgroundColor = "black";
        document.getElementById("userTabSelected").style.backgroundColor = "black";

        document.getElementById("tabImage").src = "images/badges/Role1-Skills.png";

        document.getElementById("Ref-XSS-Skills-Value-stat-board").innerText = Math.ceil(AttackerReflectedSkillsValue);
        document.getElementById("video-progress-Ref-XSS-overall-statboard").value = Math.ceil(AttackerReflectedSkillsValue);
        document.getElementById("Stored-XSS-Skills-Value-stat-board").innerText = Math.ceil(AttackerStoredSkillsValue);
        document.getElementById("video-progress-Stored-XSS-stat-board").value = Math.ceil(AttackerStoredSkillsValue);
        document.getElementById("DOM-based-XSS-Skills-Value-stat-board").innerText = Math.ceil(AttackerDOMBasedSkillsValue);
        document.getElementById("video-progress-DOM-based-XSS-stat-board").value = Math.ceil(AttackerDOMBasedSkillsValue);
        document.getElementById("Sim-Zone-Skills-Value-stat-board").innerText = Math.ceil(AttackerSimZoneSkillsValue);
        document.getElementById("video-progress-Sim-Zone-Skills-Progress-stat-board").value = Math.ceil(AttackerSimZoneSkillsValue);

        const affirmativeFeedbackAttackerInGame = document.getElementById('playerstatboard-skills-affirmative-box-text');
        affirmativeFeedbackAttackerInGame.innerText = affirmativeAttackerProgressFeedbackList[Math.floor(Math.random() * affirmativeAttackerProgressFeedbackList.length)];
        affirmativeFeedbackAttackerInGame.setAttribute("style", "position:fixed;top:10%;left:30%;width:45%;font-size:1.6vw;z-index:2;font-weight:bold;word-wrap:break-word;");

        const personalizedFeedbackAttackerInGame = document.getElementById('playerstatboard-feedback-box-text');
        personalizedFeedbackAttackerInGame.innerText = levelAttackerProgressFeedbackList[Math.floor(Math.random() * levelAttackerProgressFeedbackList.length)];
        personalizedFeedbackAttackerInGame.setAttribute("style", "position:fixed;top:48%;left:27%;width: 50%;color: #f9f6f6;font-size: 2vw;z-index: 1;font-weight: bold;");

    }

    if (role_name == "Defender" && rolesPlayed.includes('Defender')) {
        document.getElementById("overallTabSelected").style.backgroundColor = "black";
        document.getElementById("attackerTabSelected").style.backgroundColor = "black";
        document.getElementById("defenderTabSelected").style.backgroundColor = "red";
        document.getElementById("userTabSelected").style.backgroundColor = "black";

        document.getElementById("tabImage").src = "images/badges/Role2-Skills.png";

        document.getElementById("Ref-XSS-Skills-Value-stat-board").innerText = Math.ceil(DefenderReflectedSkillsValue);
        document.getElementById("video-progress-Ref-XSS-overall-statboard").value = Math.ceil(DefenderReflectedSkillsValue);
        document.getElementById("Stored-XSS-Skills-Value-stat-board").innerText = Math.ceil(DefenderStoredSkillsValue);
        document.getElementById("video-progress-Stored-XSS-stat-board").value = Math.ceil(DefenderStoredSkillsValue);
        document.getElementById("DOM-based-XSS-Skills-Value-stat-board").innerText = Math.ceil(DefenderDOMBasedSkillsValue);
        document.getElementById("video-progress-DOM-based-XSS-stat-board").value = Math.ceil(DefenderDOMBasedSkillsValue);
        document.getElementById("Sim-Zone-Skills-Value-stat-board").innerText = Math.ceil(DefenderSimZoneSkillsValue);
        document.getElementById("video-progress-Sim-Zone-Skills-Progress-stat-board").value = Math.ceil(DefenderSimZoneSkillsValue);

        const personalizedFeedbackDefender = document.getElementById('playerstatboard-feedback-box-text');
        personalizedFeedbackDefender.innerText = tabSelectedDefender;
        personalizedFeedbackDefender.setAttribute("style", "position:fixed;top:30%;left:27%;width: 50%;color: #f9f6f6;font-size: 0.92vw;z-index: 1;font-weight: bold;visibility:visible;");

        const affirmativeFeedbackDefender = document.getElementById('playerstatboard-skills-affirmative-box-text');
        affirmativeFeedbackDefender.innerText = tabSelectedAffirmativeDefender;
        affirmativeFeedbackDefender.setAttribute("style", "position:fixed;top:10%;left:30%;width:45%;font-size:1.6vw;z-index:2;font-weight:bold;word-wrap:break-word;visibility:visible;");
    } else if (role_name == "Defender") {
        document.getElementById("overallTabSelected").style.backgroundColor = "black";
        document.getElementById("attackerTabSelected").style.backgroundColor = "black";
        document.getElementById("defenderTabSelected").style.backgroundColor = "red";
        document.getElementById("userTabSelected").style.backgroundColor = "black";

        document.getElementById("tabImage").src = "images/badges/Role2-Skills.png";

        document.getElementById("Ref-XSS-Skills-Value-stat-board").innerText = Math.ceil(DefenderReflectedSkillsValue);
        document.getElementById("video-progress-Ref-XSS-overall-statboard").value = Math.ceil(DefenderReflectedSkillsValue);
        document.getElementById("Stored-XSS-Skills-Value-stat-board").innerText = Math.ceil(DefenderStoredSkillsValue);
        document.getElementById("video-progress-Stored-XSS-stat-board").value = Math.ceil(DefenderStoredSkillsValue);
        document.getElementById("DOM-based-XSS-Skills-Value-stat-board").innerText = Math.ceil(DefenderDOMBasedSkillsValue);
        document.getElementById("video-progress-DOM-based-XSS-stat-board").value = Math.ceil(DefenderDOMBasedSkillsValue);
        document.getElementById("Sim-Zone-Skills-Value-stat-board").innerText = Math.ceil(DefenderSimZoneSkillsValue);
        document.getElementById("video-progress-Sim-Zone-Skills-Progress-stat-board").value = Math.ceil(DefenderSimZoneSkillsValue);

        const affirmativeFeedbackDefenderInGame = document.getElementById('playerstatboard-skills-affirmative-box-text');
        affirmativeFeedbackDefenderInGame.innerText = affirmativeDefenderProgressFeedbackList[Math.floor(Math.random() * affirmativeDefenderProgressFeedbackList.length)];
        affirmativeFeedbackDefenderInGame.setAttribute("style", "position:fixed;top:10%;left:30%;width:45%;font-size:1.6vw;z-index:2;font-weight:bold;word-wrap:break-word;");

        const personalizedFeedbackDefenderInGame = document.getElementById('playerstatboard-feedback-box-text');
        personalizedFeedbackDefenderInGame.innerText = levelDefenderProgressFeedbackList[Math.floor(Math.random() * levelDefenderProgressFeedbackList.length)];
        personalizedFeedbackDefenderInGame.setAttribute("style", "position:fixed;top:48%;left:27%;width: 50%;color: #f9f6f6;font-size: 2vw;z-index: 1;font-weight: bold;");
    }

    if (role_name == "User" && rolesPlayed.includes('User')) {
        document.getElementById("overallTabSelected").style.backgroundColor = "black";
        document.getElementById("attackerTabSelected").style.backgroundColor = "black";
        document.getElementById("defenderTabSelected").style.backgroundColor = "black";
        document.getElementById("userTabSelected").style.backgroundColor = "red";

        document.getElementById("tabImage").src = "images/badges/Role3-Skills.png";

        document.getElementById("Ref-XSS-Skills-Value-stat-board").innerText = Math.ceil(UserReflectedSkillsValue);
        document.getElementById("video-progress-Ref-XSS-overall-statboard").value = Math.ceil(UserReflectedSkillsValue);
        document.getElementById("Stored-XSS-Skills-Value-stat-board").innerText = Math.ceil(UserStoredSkillsValue);
        document.getElementById("video-progress-Stored-XSS-stat-board").value = Math.ceil(UserStoredSkillsValue);
        document.getElementById("DOM-based-XSS-Skills-Value-stat-board").innerText = Math.ceil(UserDOMBasedSkillsValue);
        document.getElementById("video-progress-DOM-based-XSS-stat-board").value = Math.ceil(UserDOMBasedSkillsValue);
        document.getElementById("Sim-Zone-Skills-Value-stat-board").innerText = Math.ceil(UserSimZoneSkillsValue);
        document.getElementById("video-progress-Sim-Zone-Skills-Progress-stat-board").value = Math.ceil(UserSimZoneSkillsValue);

        const personalizedFeedbackUser = document.getElementById('playerstatboard-feedback-box-text');
        personalizedFeedbackUser.innerText = tabSelectedUser;
        personalizedFeedbackUser.setAttribute("style", "position:fixed;top:30%;left:27%;width: 50%;color: #f9f6f6;font-size: 0.92vw;z-index: 1;font-weight: bold;visibility:visible;");

        const affirmativeFeedbackUser = document.getElementById('playerstatboard-skills-affirmative-box-text');
        affirmativeFeedbackUser.innerText = tabSelectedAffirmativeUser;
        affirmativeFeedbackUser.setAttribute("style", "position:fixed;top:10%;left:30%;width:45%;font-size:1.6vw;z-index:2;font-weight:bold;word-wrap:break-word;visibility:visible;");

    } else if (role_name == "User") {
        document.getElementById("overallTabSelected").style.backgroundColor = "black";
        document.getElementById("attackerTabSelected").style.backgroundColor = "black";
        document.getElementById("defenderTabSelected").style.backgroundColor = "black";
        document.getElementById("userTabSelected").style.backgroundColor = "red";

        document.getElementById("tabImage").src = "images/badges/Role3-Skills.png";

        document.getElementById("Ref-XSS-Skills-Value-stat-board").innerText = Math.ceil(UserReflectedSkillsValue);
        document.getElementById("video-progress-Ref-XSS-overall-statboard").value = Math.ceil(UserReflectedSkillsValue);
        document.getElementById("Stored-XSS-Skills-Value-stat-board").innerText = Math.ceil(UserStoredSkillsValue);
        document.getElementById("video-progress-Stored-XSS-stat-board").value = Math.ceil(UserStoredSkillsValue);
        document.getElementById("DOM-based-XSS-Skills-Value-stat-board").innerText = Math.ceil(UserDOMBasedSkillsValue);
        document.getElementById("video-progress-DOM-based-XSS-stat-board").value = Math.ceil(UserDOMBasedSkillsValue);
        document.getElementById("Sim-Zone-Skills-Value-stat-board").innerText = Math.ceil(UserSimZoneSkillsValue);
        document.getElementById("video-progress-Sim-Zone-Skills-Progress-stat-board").value = Math.ceil(UserSimZoneSkillsValue);

        const affirmativeFeedbackUserInGame = document.getElementById('playerstatboard-skills-affirmative-box-text');
        affirmativeFeedbackUserInGame.innerText = affirmativeUserProgressFeedbackList[Math.floor(Math.random() * affirmativeUserProgressFeedbackList.length)];
        affirmativeFeedbackUserInGame.setAttribute("style", "position:fixed;top:10%;left:30%;width:45%;font-size:1.6vw;z-index:2;font-weight:bold;word-wrap:break-word;");

        const personalizedFeedbackUserInGame = document.getElementById('playerstatboard-feedback-box-text');
        personalizedFeedbackUserInGame.innerText = levelUserProgressFeedbackList[Math.floor(Math.random() * levelUserProgressFeedbackList.length)];
        personalizedFeedbackUserInGame.setAttribute("style", "position:fixed;top:48%;left:27%;width: 50%;color: #f9f6f6;font-size: 2vw;z-index: 1;font-weight: bold;");

    }

}