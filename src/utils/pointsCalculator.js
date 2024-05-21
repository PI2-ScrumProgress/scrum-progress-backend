function calculateCompletionPoints(
  elementType,
  deadline,
  completionDate,
  storyPoints = 0
) {
  let basePoints = 0;
  let complexityPoints = 2 * storyPoints;

  if (elementType === "Task") {
    basePoints = 1;
  } else if (elementType === "User Story") {
    basePoints = 2;
    complexityPoints = storyPoints;
  }

  const deadlineDate = new Date(deadline);
  const completionDateObj = new Date(completionDate);
  const timeDifference = Math.floor(
    (deadlineDate - completionDateObj) / (1000 * 60 * 60 * 24)
  );
  const timePoints = timeDifference; // Puntos basados en el tiempo

  const completionPoints = basePoints + timePoints + complexityPoints;
  return completionPoints;
}

function calculateNonCompletionPoints(
  penaltyPoints,
  deadline,
  currentDate,
  importancePoints
) {
  // Calcula la diferencia en días entre la fecha límite y la fecha actual
  const deadlineDate = new Date(deadline);
  const currentDateObj = new Date(currentDate);
  const missingDays = Math.floor(
    (deadlineDate - currentDateObj) / (1000 * 60 * 60 * 24)
  );
  const missingPoints = missingDays; // Puntos basados en el tiempo faltante

  const nonCompletionPoints = -(
    penaltyPoints +
    missingPoints +
    importancePoints
  );
  return nonCompletionPoints;
}
