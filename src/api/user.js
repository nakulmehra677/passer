const dummyData = [
  { id: 1, username: "user1", email: "user1@example.com", role: "admin" },
  { id: 2, username: "user2", email: "user2@example.com", role: "user" },
  { id: 3, username: "user3", email: "user3@example.com", role: "user" },
  { id: 4, username: "user4", email: "user4@example.com", role: "user" },
  { id: 5, username: "user5", email: "user5@example.com", role: "admin" },
  { id: 6, username: "user6", email: "user6@example.com", role: "user" },
  { id: 7, username: "user7", email: "user7@example.com", role: "user" },
  { id: 8, username: "user8", email: "user8@example.com", role: "user" },
  { id: 9, username: "user9", email: "user9@example.com", role: "admin" },
  { id: 10, username: "user10", email: "user10@example.com", role: "user" },
  { id: 11, username: "user11", email: "user11@example.com", role: "user" },
  { id: 12, username: "user12", email: "user12@example.com", role: "user" },
  { id: 13, username: "user13", email: "user13@example.com", role: "admin" },
  { id: 14, username: "user14", email: "user14@example.com", role: "user" },
  { id: 15, username: "user15", email: "user15@example.com", role: "user" },
  { id: 16, username: "user16", email: "user16@example.com", role: "user" },
  { id: 17, username: "user17", email: "user17@example.com", role: "admin" },
  { id: 18, username: "user18", email: "user18@example.com", role: "user" },
  { id: 19, username: "user19", email: "user19@example.com", role: "user" },
  { id: 20, username: "user20", email: "user20@example.com", role: "user" },
  { id: 21, username: "user21", email: "user21@example.com", role: "admin" },
  { id: 22, username: "user22", email: "user22@example.com", role: "user" },
  { id: 23, username: "user23", email: "user23@example.com", role: "user" },
  { id: 24, username: "user24", email: "user24@example.com", role: "user" },
  { id: 25, username: "user25", email: "user25@example.com", role: "admin" },
  { id: 26, username: "user26", email: "user26@example.com", role: "user" },
  { id: 27, username: "user27", email: "user27@example.com", role: "user" },
  { id: 28, username: "user28", email: "user28@example.com", role: "user" },
  { id: 29, username: "user29", email: "user29@example.com", role: "admin" },
  { id: 30, username: "user30", email: "user30@example.com", role: "user" },
  { id: 31, username: "user31", email: "user31@example.com", role: "user" },
  { id: 32, username: "user32", email: "user32@example.com", role: "user" },
  { id: 33, username: "user33", email: "user33@example.com", role: "admin" },
  { id: 34, username: "user34", email: "user34@example.com", role: "user" },
  { id: 35, username: "user35", email: "user35@example.com", role: "user" },
  { id: 36, username: "user36", email: "user36@example.com", role: "user" },
  { id: 37, username: "user37", email: "user37@example.com", role: "admin" },
  { id: 38, username: "user38", email: "user38@example.com", role: "user" },
  { id: 39, username: "user39", email: "user39@example.com", role: "user" },
  { id: 40, username: "user40", email: "user40@example.com", role: "user" },
  { id: 41, username: "user41", email: "user41@example.com", role: "admin" },
  { id: 42, username: "user42", email: "user42@example.com", role: "user" },
  { id: 43, username: "user43", email: "user43@example.com", role: "user" },
  { id: 44, username: "user44", email: "user44@example.com", role: "user" },
  { id: 45, username: "user45", email: "user45@example.com", role: "admin" },
  { id: 46, username: "user46", email: "user46@example.com", role: "user" },
  { id: 47, username: "user47", email: "user47@example.com", role: "user" },
  { id: 48, username: "user48", email: "user48@example.com", role: "user" },
  { id: 49, username: "user49", email: "user49@example.com", role: "admin" },
  { id: 50, username: "user50", email: "user50@example.com", role: "user" },
];

export const apiGetUser = async ({ id }) => {
  await new Promise((res) => setTimeout(() => res(), 500));

  if (id < 1 || id > dummyData.length) throw new Error();

  return dummyData[id - 1];
};

export const apiUpdateUser = async ({ id, data }) => {
  await new Promise((res) => setTimeout(() => res(), 500));

  if (id < 1 || id > dummyData.length) throw new Error();

  dummyData[id - 1] = { ...data, id };

  return dummyData[id - 1];
};

export const apiAddUser = async ({ data }) => {
  await new Promise((res) => setTimeout(() => res(), 500));

  dummyData.push({ ...data, id: dummyData.length });

  return dummyData[dummyData.length - 1];
};

export const apiGetUserList = async ({ offset }) => {
  await new Promise((res) => setTimeout(() => res(), 500));

  return dummyData.slice(offset, offset + 10);
};

export const apiDeleteUser = async ({ id }) => {
  await new Promise((res) => setTimeout(() => res(), 500));

  return dummyData.splice(id - 1, 1);
};
