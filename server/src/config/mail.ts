interface IMailConfig {
  driver: 'ethereal' | 'ses';
  defaults: {
    from: {
      email: string;
      name: string;
    };
  };
}

export default {
  driver: process.env.MAIL_DRIVER || 'ethereal',

  defaults: {
    from: {
      email: 'lucasfabriferraro@gmail.com',
      name: 'Lucas Fabri Ferraro',
    },
  },
} as IMailConfig;
