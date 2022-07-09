import { User } from "../../../../domain/entities/user";
import { UserRepository } from "../../../../domain/repositories/user";
import { ExistUserByUserName } from "../../../../domain/services/user/existbyusername";
import { UserAlreadyExistsException } from "../../../../domain/exceptions/user/alreadyexistsexception";

export class UserCreatorUseCase {
  private readonly _userRepository: UserRepository;
  private readonly _existUserByUserName: ExistUserByUserName;

  constructor(userRepository: UserRepository) {
    this._userRepository = userRepository;
    this._existUserByUserName = new ExistUserByUserName(userRepository);
  }

  async run(body: User): Promise<User> {
    const existUser = await this._existUserByUserName.run(body.username!);
    if (existUser) throw new UserAlreadyExistsException();
    const userCreated: User = await this._userRepository.save(body);
    return userCreated;
  }
}
