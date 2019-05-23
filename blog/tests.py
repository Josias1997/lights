from django.test import TestCase
from .models import Article, Category, Comment
from django.urls import reverse

# Create your tests here.


def create_category(name):
    return Category.objects.create(name=name)


def create_article(is_visible, name):
    return Article.objects.create(
        title="Hello",
        author="Josias",
        content="Yes",
        is_visible=is_visible,
        category=create_category(name)
    )


def create_comment(is_visible_comment, is_visible_article, name_category):
    return Comment.objects.create(
        author_pseudo="Yannick",
        author_email="kologojosias@gmail.com",
        content="Good",
        is_visible=is_visible_comment,
        article=create_article(is_visible_article, name_category)
    )


class ArticleTest(TestCase):
    def test_if_is_visible(self):
        article1 = create_article(True, "Bread")
        article2 = create_article(False, "Bread")
        self.assertIs(article1.is_visible, True)
        self.assertIs(article2.is_visible, False)


class ArticleViewTest(TestCase):
    def test_no_articles(self):
        """
        If there isn't any article, we must display an appropriate message
        :return:
        """
        response = self.client.get(reverse('blog:index'))
        self.assertEqual(response.status_code, 200)
        self.assertContains(response, "No articles are available.")

    def test_visible_article(self):
        """
        Test if a visible article is present on the page
        :return:
        """
        create_article(True, "Good")
        response = self.client.get(reverse('blog:index'))
        self.assertQuerysetEqual(response.context['last_articles'], [
            '<Article: Hello>'
        ])

    def test_not_visible_article(self):
        """
        Tests if a non visible article won't be print on the page
        :return:
        """
        create_article(False, "Good")
        response = self.client.get(reverse('blog:index'))
        self.assertContains(response, "No articles are available.")
        self.assertQuerysetEqual(response.context['last_articles'], [])

    def test_read_visible_article(self):
        """
        Tests if we can read a visible article
        :return:
        """
        article = create_article(True, "Good")
        response = self.client.get(reverse('blog:read', args=(article.id, )))
        self.assertContains(response, article.title)

    def test_read_non_visible_article(self):
        """
        Tests if it is not possible to read an article which is not visible
        :return:
        """
        article = create_article(False, "Good")
        response = self.client.get(reverse('blog:read', args=(article.id, )))
        self.assertEqual(response.status_code, 404)


class CommentsTest(TestCase):
    def test_if_comment_is_visible(self):
        """
        Test if the comment is visible
        :return:
        """
        comment1 = create_comment(True, True, "Good")
        comment2 = create_comment(False, True, "Good")
        comment3 = create_comment(True, False, "Good")
        comment4 = create_comment(False, False, "Good")

        self.assertIs(comment1.is_visible, True)
        self.assertIs(comment2.is_visible, False)