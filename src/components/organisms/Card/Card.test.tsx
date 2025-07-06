import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Card, { CardCompound } from './Card';

describe('Card', () => {
  const user = userEvent.setup();

  describe('Renderização Básica', () => {
    it('renderiza o conteúdo do card', () => {
      render(
        <Card>
          <div>Card content</div>
        </Card>
      );

      expect(screen.getByText('Card content')).toBeInTheDocument();
    });

    it('renderiza com role="button" quando clicável', () => {
      render(
        <Card onClick={() => { }}>
          <div>Clickable card</div>
        </Card>
      );

      expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('não renderiza role="button" quando não clicável', () => {
      render(
        <Card>
          <div>Non-clickable card</div>
        </Card>
      );

      expect(screen.queryByRole('button')).not.toBeInTheDocument();
    });
  });

  describe('Variantes', () => {
    it('aplica variante default', () => {
      render(
        <Card variant="default">
          <div>Content</div>
        </Card>
      );

      const card = screen.getByText('Content').closest('div');
      expect(card?.className).toContain('bg-white');
      expect(card?.className).toContain('border-gray-200');
    });

    it('aplica variante elevated', () => {
      render(
        <Card variant="elevated">
          <div>Content</div>
        </Card>
      );

      const card = screen.getByText('Content').closest('div');
      expect(card?.className).toContain('shadow-lg');
    });

    it('aplica variante outlined', () => {
      render(
        <Card variant="outlined">
          <div>Content</div>
        </Card>
      );

      const card = screen.getByText('Content').closest('div');
      expect(card?.className).toContain('border-2');
      expect(card?.className).toContain('border-gray-300');
    });

    it('aplica variante flat', () => {
      render(
        <Card variant="flat">
          <div>Content</div>
        </Card>
      );

      const card = screen.getByText('Content').closest('div');
      expect(card?.className).toContain('bg-gray-50');
    });
  });

  describe('Tamanhos', () => {
    it('aplica tamanho sm', () => {
      render(
        <Card size="sm">
          <div>Content</div>
        </Card>
      );

      const card = screen.getByText('Content').closest('div');
      expect(card?.className).toContain('p-3');
    });

    it('aplica tamanho md (padrão)', () => {
      render(
        <Card>
          <div>Content</div>
        </Card>
      );

      const card = screen.getByText('Content').closest('div');
      expect(card?.className).toContain('p-4');
    });

    it('aplica tamanho lg', () => {
      render(
        <Card size="lg">
          <div>Content</div>
        </Card>
      );

      const card = screen.getByText('Content').closest('div');
      expect(card?.className).toContain('p-6');
    });
  });

  describe('Interações', () => {
    it('chama onClick quando clicado', async () => {
      const handleClick = jest.fn();
      render(
        <Card onClick={handleClick}>
          <div>Clickable content</div>
        </Card>
      );

      const card = screen.getByRole('button');
      await user.click(card);

      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('chama onClick com Enter', async () => {
      const handleClick = jest.fn();
      render(
        <Card onClick={handleClick}>
          <div>Clickable content</div>
        </Card>
      );

      const card = screen.getByRole('button');
      await user.keyboard('{Enter}');

      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('chama onClick com Space', async () => {
      const handleClick = jest.fn();
      render(
        <Card onClick={handleClick}>
          <div>Clickable content</div>
        </Card>
      );

      const card = screen.getByRole('button');
      await user.keyboard(' ');

      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('não chama onClick quando desabilitado', async () => {
      const handleClick = jest.fn();
      render(
        <Card onClick={handleClick} disabled>
          <div>Disabled content</div>
        </Card>
      );

      const card = screen.getByRole('button');
      expect(card).toHaveAttribute('aria-disabled', 'true');

      await user.click(card);
      expect(handleClick).not.toHaveBeenCalled();
    });

    it('não chama onClick quando loading', async () => {
      const handleClick = jest.fn();
      render(
        <Card onClick={handleClick} loading>
          <div>Loading content</div>
        </Card>
      );

      const card = screen.getByText('Loading content').closest('div');
      await user.click(card!);
      expect(handleClick).not.toHaveBeenCalled();
    });
  });

  describe('Estados', () => {
    it('aplica estado disabled', () => {
      render(
        <Card disabled>
          <div>Content</div>
        </Card>
      );

      const card = screen.getByText('Content').closest('div');
      expect(card?.className).toContain('opacity-50');
      expect(card?.className).toContain('cursor-not-allowed');
    });

    it('aplica estado loading', () => {
      render(
        <Card loading>
          <div>Content</div>
        </Card>
      );

      const card = screen.getByText('Content').closest('div');
      expect(card?.className).toContain('animate-pulse');
    });

    it('renderiza spinner quando loading', () => {
      render(
        <Card loading>
          <div>Content</div>
        </Card>
      );

      expect(screen.getByRole('button', { hidden: true })).toBeInTheDocument();
    });
  });

  describe('Acessibilidade', () => {
    it('tem tabIndex quando clicável', () => {
      render(
        <Card onClick={() => { }}>
          <div>Content</div>
        </Card>
      );

      const card = screen.getByRole('button');
      expect(card).toHaveAttribute('tabIndex', '0');
    });

    it('não tem tabIndex quando não clicável', () => {
      render(
        <Card>
          <div>Content</div>
        </Card>
      );

      const card = screen.getByText('Content').closest('div');
      expect(card).not.toHaveAttribute('tabIndex');
    });

    it('tem aria-disabled quando desabilitado', () => {
      render(
        <Card disabled>
          <div>Content</div>
        </Card>
      );

      const card = screen.getByText('Content').closest('div');
      expect(card).toHaveAttribute('aria-disabled', 'true');
    });
  });

  describe('CardHeader', () => {
    it('renderiza header com avatar', () => {
      render(
        <Card>
          <CardCompound.Header avatar="https://example.com/avatar.jpg" avatarName="User">
            <Typography size="lg" className="font-semibold">Card Title</Typography>
          </CardCompound.Header>
          <div>Content</div>
        </Card>
      );

      expect(screen.getByText('Card Title')).toBeInTheDocument();
      expect(screen.getByRole('img')).toBeInTheDocument();
    });

    it('renderiza header com ações', () => {
      render(
        <Card>
          <CardCompound.Header actions={<button>Action</button>}>
            <Typography size="lg" className="font-semibold">Card Title</Typography>
          </CardCompound.Header>
          <div>Content</div>
        </Card>
      );

      expect(screen.getByText('Action')).toBeInTheDocument();
    });
  });

  describe('CardContent', () => {
    it('renderiza conteúdo', () => {
      render(
        <Card>
          <CardCompound.Content>
            <p>Card content</p>
          </CardCompound.Content>
        </Card>
      );

      expect(screen.getByText('Card content')).toBeInTheDocument();
    });
  });

  describe('CardFooter', () => {
    it('renderiza footer', () => {
      render(
        <Card>
          <div>Content</div>
          <CardCompound.Footer>
            <span>Footer content</span>
          </CardCompound.Footer>
        </Card>
      );

      expect(screen.getByText('Footer content')).toBeInTheDocument();
    });
  });

  describe('CardImage', () => {
    it('renderiza imagem com aspect ratio padrão', () => {
      render(
        <Card>
          <CardCompound.Image src="https://example.com/image.jpg" alt="Card image" />
          <div>Content</div>
        </Card>
      );

      const image = screen.getByAltText('Card image');
      expect(image).toBeInTheDocument();
      expect(image).toHaveClass('aspect-square');
    });

    it('renderiza imagem com aspect ratio video', () => {
      render(
        <Card>
          <CardCompound.Image
            src="https://example.com/image.jpg"
            alt="Card image"
            aspectRatio="video"
          />
          <div>Content</div>
        </Card>
      );

      const image = screen.getByAltText('Card image');
      expect(image).toHaveClass('aspect-video');
    });

    it('renderiza imagem com aspect ratio wide', () => {
      render(
        <Card>
          <CardCompound.Image
            src="https://example.com/image.jpg"
            alt="Card image"
            aspectRatio="wide"
          />
          <div>Content</div>
        </Card>
      );

      const image = screen.getByAltText('Card image');
      expect(image).toHaveClass('aspect-[16/9]');
    });
  });

  describe('CardAction', () => {
    it('renderiza ação como botão', () => {
      const handleAction = jest.fn();
      render(
        <Card>
          <div>Content</div>
          <CardCompound.Footer>
            <CardCompound.Action onClick={handleAction}>
              Action Button
            </CardCompound.Action>
          </CardCompound.Footer>
        </Card>
      );

      const actionButton = screen.getByText('Action Button');
      expect(actionButton).toBeInTheDocument();
      expect(actionButton.tagName).toBe('BUTTON');
    });

    it('chama onClick da ação', async () => {
      const handleAction = jest.fn();
      render(
        <Card>
          <div>Content</div>
          <CardCompound.Footer>
            <CardCompound.Action onClick={handleAction}>
              Action Button
            </CardCompound.Action>
          </CardCompound.Footer>
        </Card>
      );

      const actionButton = screen.getByText('Action Button');
      await user.click(actionButton);

      expect(handleAction).toHaveBeenCalledTimes(1);
    });

    it('aplica variante da ação', () => {
      render(
        <Card>
          <div>Content</div>
          <CardCompound.Footer>
            <CardCompound.Action variant="outline">
              Outline Action
            </CardCompound.Action>
          </CardCompound.Footer>
        </Card>
      );

      const actionButton = screen.getByText('Outline Action');
      expect(actionButton).toHaveClass('bg-white');
      expect(actionButton).toHaveClass('border-gray-200');
    });
  });

  describe('Composição Completa', () => {
    it('renderiza card completo com todos os elementos', () => {
      render(
        <Card>
          <CardCompound.Image src="https://example.com/image.jpg" alt="Card image" />
          <CardCompound.Header avatar="https://example.com/avatar.jpg" avatarName="User">
            <Typography size="lg" className="font-semibold">Card Title</Typography>
            <Typography size="sm" className="text-gray-600">Card subtitle</Typography>
          </CardCompound.Header>
          <CardCompound.Content>
            <p>Card content description</p>
          </CardCompound.Content>
          <CardCompound.Footer>
            <span>Footer info</span>
            <CardCompound.Action>Action</CardCompound.Action>
          </CardCompound.Footer>
        </Card>
      );

      expect(screen.getByText('Card Title')).toBeInTheDocument();
      expect(screen.getByText('Card subtitle')).toBeInTheDocument();
      expect(screen.getByText('Card content description')).toBeInTheDocument();
      expect(screen.getByText('Footer info')).toBeInTheDocument();
      expect(screen.getByText('Action')).toBeInTheDocument();
      expect(screen.getByAltText('Card image')).toBeInTheDocument();
      expect(screen.getByRole('img')).toBeInTheDocument();
    });
  });
}); 