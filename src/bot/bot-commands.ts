type BotCommand = {
    command: string
    args?: string
    description: string
}

const commands = [
    {
        command: 'combo',
        description: 'Para escolher uma pizza e uma bebida'
    },
    {
        command: 'pizzas',
        description: 'Para escolher apenas a pizza'
    }
]
const pizza = [
    {
        command: '1 -',
        args: 'Calabresa',
        description: 'Calabresa, Oregano, Mussarela - 38 reais'
    },
    {
        command: '2 -',
        args: 'Peperone',
        description: 'Peperone, Oregano, Mussarela - 40 reais'
    }
]
const bebida = [
    {
        command: '1 -',
        args: 'Coca Cola',
        description: 'Lata 400ml - 6 reais'
    },
    {
        command: '2 -',
        args: 'Pepsi',
        description: 'Lata 400ml - 6 reais'
    }
]

const getCommand = (commandName: string) => {
    const command = commands.find(x => x.command == commandName);
    if (!command)
        throw new Error('Invalid command' + commandName)

    return command;
}
const getCardapioPizza = (comidaNome: string) => {
    const command = pizza.find(y => y.command == comidaNome);
    if (!command)
        throw new Error('Invalid command' + comidaNome)

    return command;
}
const getCardapioBebida = (commandName: string) => {
    const command = bebida.find(z => z.command == commandName);
    if (!command)
        throw new Error('Invalid command' + commandName)

    return command;
}

const getCommandFullDescription = (x: BotCommand) =>
    `${x.command}${x.args ? ' ' + x.args : ''} - ${x.description}`;

const getCardapioPizzaDescricao = (y: BotCommand) =>
    `${y.command}${y.args ? ' ' + y.args : ''} - ${y.description}`;

const getCardapioBebidaDescricao = (z: BotCommand) =>
    `${z.command}${z.args ? ' ' + z.args : ''} - ${z.description}`;

const getPizzaListText = () =>
    pizza.map(getCardapioPizzaDescricao)
        .join('\n');

const getBebidaListText = () =>
    bebida.map(getCardapioBebidaDescricao)
        .join('\n');

const getCommandListText = () =>
    commands.map(getCommandFullDescription)
        .join('\n');

export {
    getCommand,
    getCardapioPizza,
    getCardapioPizzaDescricao,
    getPizzaListText,
    getCardapioBebida,
    getCardapioBebidaDescricao,
    getBebidaListText,
    getCommandFullDescription,
    getCommandListText,
    BotCommand
}