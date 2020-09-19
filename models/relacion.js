const Post = require('../models/Post');
const Categoria = require('../models/Categoria');

Categoria.hasMany(Post, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION'
}, {
    foreignKey: {
        name: 'id_categoria',
        notNull: true
    }
});
Post.belongsTo(Categoria, {
    foreignKey: {
        name: 'id_categoria',
        notNull: true
    }
})