import { User } from "@domain/entities/user";
import { UserCreatorUseCase } from "@application/usecases/user/creator";
import { UserGetterUseCase } from "@application/usecases/user/getter";
import { UserDeleterUseCase } from "@application/usecases/user/delete";
import { UserUpdaterUseCase } from "@application/usecases/user/updater";
import { InMemoryUserRepository } from "@infrastructure/implementations/memory";

// IIFE Function
(async () => {
  const inMemoryUserRepo = new InMemoryUserRepository();

  // Create user
  const userCreatorUseCase = new UserCreatorUseCase(inMemoryUserRepo);
  const userToCreate: User = {
    name: "luciana",
    age: 18,
    username: "luciana18",
    id: "1",
  };
  await userCreatorUseCase.run(userToCreate);

  // Get all user
  const userGetterUserCase = new UserGetterUseCase(inMemoryUserRepo);
  const usersReturned = await userGetterUserCase.run();
  console.log(usersReturned);

  // Update user
  const userUpdaterUseCase = new UserUpdaterUseCase(inMemoryUserRepo);
  await userUpdaterUseCase.run({
    id: "1",
    username: "luci",
  });

  const usersReturned2 = await userGetterUserCase.run();
  console.log(usersReturned2);

  // Delete users
  const userDeleteUserCase = new UserDeleterUseCase(inMemoryUserRepo);
  await userDeleteUserCase.run("1");

  const usersReturned3 = await userGetterUserCase.run();
  console.log(usersReturned3);
})();
