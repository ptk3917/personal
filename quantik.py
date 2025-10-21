import pygame
import sys

# --- Constants ---
# Colors
WHITE = (255, 255, 255)
BLACK = (0, 0, 0)
GRAY = (200, 200, 200)
LIGHT_GRAY = (230, 230, 230)
BOARD_COLOR = (210, 180, 140) # Tan
PLAYER1_COLOR = (70, 130, 180)  # Steel Blue
PLAYER2_COLOR = (255, 105, 97) # Pastel Red

# Screen & Board Dimensions
SCREEN_WIDTH = 800
SCREEN_HEIGHT = 600
BOARD_X, BOARD_Y = 50, 50
BOARD_SIZE_PX = 500
CELL_SIZE = BOARD_SIZE_PX // 4
PIECE_RADIUS = CELL_SIZE // 3

# Game Configuration
PLAYERS = {
    'Player 1': {'pieces': {'C': 2, 'S': 2, 'T': 2, 'P': 2}, 'color': PLAYER1_COLOR, 'case': str.upper},
    'Player 2': {'pieces': {'c': 2, 's': 2, 't': 2, 'p': 2}, 'color': PLAYER2_COLOR, 'case': str.lower}
}
PIECE_SHAPES = {'C': 'rect', 'S': 'circle', 'T': 'triangle', 'P': 'pyramid'}

class QuantikGUI:
    def __init__(self):
        pygame.init()
        self.screen = pygame.display.set_mode((SCREEN_WIDTH, SCREEN_HEIGHT))
        pygame.display.set_caption("Quantik")
        self.font = pygame.font.Font(None, 36)
        self.small_font = pygame.font.Font(None, 24)
        self.clock = pygame.time.Clock()
        self.reset_game()

    def reset_game(self):
        """Initializes or resets the game state."""
        self.board = [[' ' for _ in range(4)] for _ in range(4)]
        self.players = PLAYERS
        self.current_player = 'Player 1'
        self.selected_piece = None
        self.winner = None
        self.game_over = False

    def draw_board(self):
        """Draws the game board grid."""
        for r in range(4):
            for c in range(4):
                pygame.draw.rect(self.screen, BOARD_COLOR, (BOARD_X + c * CELL_SIZE, BOARD_Y + r * CELL_SIZE, CELL_SIZE, CELL_SIZE))
                pygame.draw.rect(self.screen, BLACK, (BOARD_X + c * CELL_SIZE, BOARD_Y + r * CELL_SIZE, CELL_SIZE, CELL_SIZE), 1)

    def draw_piece(self, piece_char, x_center, y_center, color):
        """Draws a single game piece based on its shape character."""
        shape = PIECE_SHAPES[piece_char.upper()]
        if shape == 'circle':
            pygame.draw.circle(self.screen, color, (x_center, y_center), PIECE_RADIUS)
        elif shape == 'rect':
            pygame.draw.rect(self.screen, color, (x_center - PIECE_RADIUS, y_center - PIECE_RADIUS, PIECE_RADIUS * 2, PIECE_RADIUS * 2))
        elif shape == 'triangle':
            points = [
                (x_center, y_center - PIECE_RADIUS),
                (x_center - PIECE_RADIUS, y_center + PIECE_RADIUS),
                (x_center + PIECE_RADIUS, y_center + PIECE_RADIUS)
            ]
            pygame.draw.polygon(self.screen, color, points)
        elif shape == 'pyramid': # Simplified as a diamond
            points = [
                (x_center, y_center - PIECE_RADIUS),
                (x_center + PIECE_RADIUS, y_center),
                (x_center, y_center + PIECE_RADIUS),
                (x_center - PIECE_RADIUS, y_center)
            ]
            pygame.draw.polygon(self.screen, color, points)

    def draw_pieces_on_board(self):
        """Draws all the pieces currently placed on the board."""
        for r in range(4):
            for c in range(4):
                piece = self.board[r][c]
                if piece != ' ':
                    player = 'Player 1' if piece.isupper() else 'Player 2'
                    color = self.players[player]['color']
                    x_center = BOARD_X + c * CELL_SIZE + CELL_SIZE // 2
                    y_center = BOARD_Y + r * CELL_SIZE + CELL_SIZE // 2
                    self.draw_piece(piece, x_center, y_center, color)

    def draw_available_pieces(self):
        """Draws the pieces available for the current player to select."""
        player_data = self.players[self.current_player]
        x_start = BOARD_X + BOARD_SIZE_PX + 30
        y_start = BOARD_Y + 40
        
        for i, (piece_char, count) in enumerate(player_data['pieces'].items()):
            if count > 0:
                x_center = x_start + 50
                y_center = y_start + i * 70
                # Highlight if selected
                if self.selected_piece == piece_char:
                    pygame.draw.rect(self.screen, LIGHT_GRAY, (x_start, y_center - 30, 180, 60))
                
                self.draw_piece(piece_char, x_center, y_center, player_data['color'])
                count_text = self.small_font.render(f'x {count}', True, BLACK)
                self.screen.blit(count_text, (x_start + 90, y_center - 10))

    def draw_ui(self):
        """Draws all UI elements, including text and game over messages."""
        self.screen.fill(WHITE)
        self.draw_board()
        self.draw_pieces_on_board()
        self.draw_available_pieces()

        # Current Player Text
        player_text = self.font.render(f"{self.current_player}'s Turn", True, BLACK)
        self.screen.blit(player_text, (BOARD_X + BOARD_SIZE_PX + 20, BOARD_Y))

        # Game Over Message
        if self.game_over:
            overlay = pygame.Surface((SCREEN_WIDTH, SCREEN_HEIGHT), pygame.SRCALPHA)
            overlay.fill((GRAY[0], GRAY[1], GRAY[2], 180)) # Semi-transparent gray
            self.screen.blit(overlay, (0, 0))
            
            winner_text = f"{self.winner} wins!" if self.winner else "It's a Draw!"
            text_surface = self.font.render(winner_text, True, BLACK)
            text_rect = text_surface.get_rect(center=(SCREEN_WIDTH/2, SCREEN_HEIGHT/2 - 30))
            self.screen.blit(text_surface, text_rect)

            restart_text = self.small_font.render("Press 'R' to Restart", True, BLACK)
            restart_rect = restart_text.get_rect(center=(SCREEN_WIDTH/2, SCREEN_HEIGHT/2 + 30))
            self.screen.blit(restart_text, restart_rect)

        pygame.display.flip()

    def handle_click(self, pos):
        """Handles mouse clicks for piece selection and placement."""
        if self.game_over: return

        x, y = pos
        # 1. Check for available piece selection
        player_data = self.players[self.current_player]
        x_start = BOARD_X + BOARD_SIZE_PX + 30
        y_start = BOARD_Y + 40
        for i, (piece_char, count) in enumerate(player_data['pieces'].items()):
            if count > 0:
                rect = pygame.Rect(x_start, y_start + i * 70 - 30, 180, 60)
                if rect.collidepoint(x, y):
                    self.selected_piece = piece_char
                    return

        # 2. Check for board placement
        if self.selected_piece and BOARD_X < x < BOARD_X + BOARD_SIZE_PX and BOARD_Y < y < BOARD_Y + BOARD_SIZE_PX:
            c = (x - BOARD_X) // CELL_SIZE
            r = (y - BOARD_Y) // CELL_SIZE
            
            if self.board[r][c] == ' ' and self.is_placement_valid(r, c, self.selected_piece):
                self.board[r][c] = self.selected_piece
                player_data['pieces'][self.selected_piece] -= 1
                
                if self.check_win(r, c):
                    self.winner = self.current_player
                    self.game_over = True
                elif self.is_board_full():
                    self.game_over = True # Draw
                else:
                    self.switch_player()
                self.selected_piece = None

    # --- Game Logic (adapted from text-based version) ---
    def is_placement_valid(self, r, c, piece):
        opponent_case = self.players['Player 2' if self.current_player == 'Player 1' else 'Player 1']['case']
        # Check row, column, and region for opponent's piece of the same shape
        # Row
        for i in range(4):
            if opponent_case(self.board[r][i]) == opponent_case(piece):
                return False
        # Column
        for i in range(4):
            if opponent_case(self.board[i][c]) == opponent_case(piece):
                return False
        # Region
        start_r, start_c = (r // 2) * 2, (c // 2) * 2
        for i in range(start_r, start_r + 2):
            for j in range(start_c, start_c + 2):
                if opponent_case(self.board[i][j]) == opponent_case(piece):
                    return False
        return True

    def check_win(self, r, c):
        zones_to_check = []
        zones_to_check.append([self.board[r][i] for i in range(4)]) # Row
        zones_to_check.append([self.board[i][c] for i in range(4)]) # Col
        start_r, start_c = (r // 2) * 2, (c // 2) * 2
        region = [self.board[i][j] for i in range(start_r, start_r + 2) for j in range(start_c, start_c + 2)]
        zones_to_check.append(region)

        for zone in zones_to_check:
            placed_shapes = {p.lower() for p in zone if p != ' '}
            if len(placed_shapes) == 4:
                return True
        return False

    def is_board_full(self):
        return all(self.board[r][c] != ' ' for r in range(4) for c in range(4))

    def switch_player(self):
        self.current_player = 'Player 2' if self.current_player == 'Player 1' else 'Player 1'

    def run(self):
        """Main game loop."""
        running = True
        while running:
            for event in pygame.event.get():
                if event.type == pygame.QUIT:
                    running = False
                if event.type == pygame.MOUSEBUTTONDOWN:
                    self.handle_click(event.pos)
                if event.type == pygame.KEYDOWN:
                    if event.key == pygame.K_r and self.game_over:
                        self.reset_game()

            self.draw_ui()
            self.clock.tick(60)

        pygame.quit()
        sys.exit()

if __name__ == "__main__":
    game = QuantikGUI()
    game.run()