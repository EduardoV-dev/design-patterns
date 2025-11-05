interface Boss {
  attack(): void;
  defend(): void;
}

// Bosses definition

class GenichiroAshina implements Boss {
  attack() {
    console.log("Genichiro Ashina attacks with his bow!");
  }
  defend() {
    console.log("Genichiro Ashina defends with swift movements!");
  }
}

class GuardianApe implements Boss {
  attack() {
    console.log("Guardian Ape attacks with powerful swings!");
  }
  defend() {
    console.log("Guardian Ape defends with its massive size!");
  }
}

class IsshinAshina implements Boss {
  attack() {
    console.log("Isshin Ashina attacks with masterful swordsmanship!");
  }
  defend() {
    console.log("Isshin Ashina defends with unparalleled skill!");
  }
}

class Owl implements Boss {
  attack() {
    console.log("Owl attacks with stealth and precision!");
  }
  defend() {
    console.log("Owl defends with cunning tactics!");
  }
}

class LadyButterfly implements Boss {
  attack() {
    console.log("Lady Butterfly attacks with illusions!");
  }
  defend() {
    console.log("Lady Butterfly defends with agility!");
  }
}

// Factories
interface BossFactory {
  create(): Boss;
}

class GenichiroAshinaFactory implements BossFactory {
  create(): Boss {
    return new GenichiroAshina();
  }
}

class GuardianApeFactory implements BossFactory {
  create(): Boss {
    return new GuardianApe();
  }
}

class IsshinAshinaFactory implements BossFactory {
  create(): Boss {
    return new IsshinAshina();
  }
}

class OwlFactory implements BossFactory {
  create(): Boss {
    return new Owl();
  }
}

class LadyButterflyFactory implements BossFactory {
  create(): Boss {
    return new LadyButterfly();
  }
}

function gameClient(bossFactory: BossFactory) {
  const boss = bossFactory.create();

  boss.attack();
  boss.defend();
}

export default function run() {
  gameClient(new GenichiroAshinaFactory());
  gameClient(new GuardianApeFactory());
  gameClient(new IsshinAshinaFactory());
  gameClient(new OwlFactory());
  gameClient(new LadyButterflyFactory());
}
