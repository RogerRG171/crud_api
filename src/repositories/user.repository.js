const { prisma } = require("../services/prisma");

exports.createUser = async (data) => {
  const user = await prisma.usuarios.create({
    data,
    select: {
      id: true,
      name: true,
      password: false,
      email: true,
    },
  });

  return user;
};

exports.getAll = async (skip, take) => {
  const [users, total] = await prisma.$transaction([
    prisma.usuarios.findMany({
      select: {
        id: true,
        name: true,
        password: false,
        email: true,
      },
      skip,
      take,
    }),
    prisma.usuarios.count(),
  ]);

  const totalPage = Math.ceil(total / take);

  return users;
};

exports.getById = async (id) => {
  const user = await prisma.usuarios.findUnique({
    where: {
      id,
    },
    select: {
      id: true,
      name: true,
      password: false,
      email: true,
    },
  });

  return user;
};

exports.updateUser = async (id, data) => {
  const user = await prisma.usuarios.update({
    where: {
      id,
    },
    data,
    select: {
      id: true,
      name: true,
      password: false,
      email: true,
    },
  });

  return user;
};

exports.deleteUser = async (id) => {
  await prisma.usuarios.delete({
    where: {
      id,
    },
  });
  return;
};
